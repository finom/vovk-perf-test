import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dim")
export default class DimController {
  @operation({
    summary: "Get Dim",
  })
  @get()
  static getDim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dim",
  })
  @post("{id}")
  static createDim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
