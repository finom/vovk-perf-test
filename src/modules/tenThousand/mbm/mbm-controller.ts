import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbm")
export default class MbmController {
  @operation({
    summary: "Get Mbm",
  })
  @get()
  static getMbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbm",
  })
  @post("{id}")
  static createMbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
