import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnv")
export default class NnvController {
  @operation({
    summary: "Get Nnv",
  })
  @get()
  static getNnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnv",
  })
  @post("{id}")
  static createNnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
