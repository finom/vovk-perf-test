import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dna")
export default class DnaController {
  @operation({
    summary: "Get Dna",
  })
  @get()
  static getDna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dna",
  })
  @post("{id}")
  static createDna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
