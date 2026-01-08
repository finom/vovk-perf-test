import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxp")
export default class DxpController {
  @operation({
    summary: "Get Dxp",
  })
  @get()
  static getDxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxp",
  })
  @post("{id}")
  static createDxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
