import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxm")
export default class DxmController {
  @operation({
    summary: "Get Dxm",
  })
  @get()
  static getDxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxm",
  })
  @post("{id}")
  static createDxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
