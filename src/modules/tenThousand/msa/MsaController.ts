import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msa")
export default class MsaController {
  @operation({
    summary: "Get Msa",
  })
  @get()
  static getMsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msa",
  })
  @post("{id}")
  static createMsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
