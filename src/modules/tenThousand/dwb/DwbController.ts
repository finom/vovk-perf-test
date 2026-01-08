import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwb")
export default class DwbController {
  @operation({
    summary: "Get Dwb",
  })
  @get()
  static getDwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwb",
  })
  @post("{id}")
  static createDwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
