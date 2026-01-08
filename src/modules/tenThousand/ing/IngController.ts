import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ing")
export default class IngController {
  @operation({
    summary: "Get Ing",
  })
  @get()
  static getIng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ing",
  })
  @post("{id}")
  static createIng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
