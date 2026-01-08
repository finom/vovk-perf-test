import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxg")
export default class DxgController {
  @operation({
    summary: "Get Dxg",
  })
  @get()
  static getDxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxg",
  })
  @post("{id}")
  static createDxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
