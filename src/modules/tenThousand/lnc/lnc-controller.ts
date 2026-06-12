import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnc")
export default class LncController {
  @operation({
    summary: "Get Lnc",
  })
  @get()
  static getLnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnc",
  })
  @post("{id}")
  static createLnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
