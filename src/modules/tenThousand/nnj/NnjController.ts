import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnj")
export default class NnjController {
  @operation({
    summary: "Get Nnj",
  })
  @get()
  static getNnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnj",
  })
  @post("{id}")
  static createNnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
