import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxp")
export default class BxpController {
  @operation({
    summary: "Get Bxp",
  })
  @get()
  static getBxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxp",
  })
  @post("{id}")
  static createBxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
