import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxl")
export default class DxlController {
  @operation({
    summary: "Get Dxl",
  })
  @get()
  static getDxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxl",
  })
  @post("{id}")
  static createDxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
