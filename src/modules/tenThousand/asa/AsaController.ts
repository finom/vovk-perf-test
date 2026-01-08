import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asa")
export default class AsaController {
  @operation({
    summary: "Get Asa",
  })
  @get()
  static getAsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asa",
  })
  @post("{id}")
  static createAsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
