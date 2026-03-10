import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffn")
export default class FfnController {
  @operation({
    summary: "Get Ffn",
  })
  @get()
  static getFfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffn",
  })
  @post("{id}")
  static createFfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
