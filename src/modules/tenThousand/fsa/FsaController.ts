import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsa")
export default class FsaController {
  @operation({
    summary: "Get Fsa",
  })
  @get()
  static getFsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsa",
  })
  @post("{id}")
  static createFsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
