import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxr")
export default class DxrController {
  @operation({
    summary: "Get Dxr",
  })
  @get()
  static getDxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxr",
  })
  @post("{id}")
  static createDxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
