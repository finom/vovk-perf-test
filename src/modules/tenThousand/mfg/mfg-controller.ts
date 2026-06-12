import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfg")
export default class MfgController {
  @operation({
    summary: "Get Mfg",
  })
  @get()
  static getMfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfg",
  })
  @post("{id}")
  static createMfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
