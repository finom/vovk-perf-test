import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxv")
export default class DxvController {
  @operation({
    summary: "Get Dxv",
  })
  @get()
  static getDxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxv",
  })
  @post("{id}")
  static createDxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
