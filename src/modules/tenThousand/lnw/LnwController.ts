import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnw")
export default class LnwController {
  @operation({
    summary: "Get Lnw",
  })
  @get()
  static getLnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnw",
  })
  @post("{id}")
  static createLnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
