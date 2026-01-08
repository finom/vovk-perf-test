import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxh")
export default class DxhController {
  @operation({
    summary: "Get Dxh",
  })
  @get()
  static getDxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxh",
  })
  @post("{id}")
  static createDxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
