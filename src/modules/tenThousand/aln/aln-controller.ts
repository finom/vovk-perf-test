import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aln")
export default class AlnController {
  @operation({
    summary: "Get Aln",
  })
  @get()
  static getAln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aln",
  })
  @post("{id}")
  static createAln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
