import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnz")
export default class NnzController {
  @operation({
    summary: "Get Nnz",
  })
  @get()
  static getNnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nnz",
  })
  @post("{id}")
  static createNnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
