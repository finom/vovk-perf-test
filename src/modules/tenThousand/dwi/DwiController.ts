import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwi")
export default class DwiController {
  @operation({
    summary: "Get Dwi",
  })
  @get()
  static getDwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwi",
  })
  @post("{id}")
  static createDwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
