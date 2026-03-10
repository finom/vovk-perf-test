import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfn")
export default class MfnController {
  @operation({
    summary: "Get Mfn",
  })
  @get()
  static getMfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfn",
  })
  @post("{id}")
  static createMfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
