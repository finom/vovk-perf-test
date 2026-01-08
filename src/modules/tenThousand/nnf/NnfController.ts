import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnf")
export default class NnfController {
  @operation({
    summary: "Get Nnf",
  })
  @get()
  static getNnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnf",
  })
  @post("{id}")
  static createNnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
