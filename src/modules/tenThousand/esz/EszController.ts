import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esz")
export default class EszController {
  @operation({
    summary: "Get Esz",
  })
  @get()
  static getEsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esz",
  })
  @post("{id}")
  static createEsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
