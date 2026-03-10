import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loy")
export default class LoyController {
  @operation({
    summary: "Get Loy",
  })
  @get()
  static getLoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Loy",
  })
  @post("{id}")
  static createLoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
