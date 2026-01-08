import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxe")
export default class DxeController {
  @operation({
    summary: "Get Dxe",
  })
  @get()
  static getDxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxe",
  })
  @post("{id}")
  static createDxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
