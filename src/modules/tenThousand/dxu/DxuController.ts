import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxu")
export default class DxuController {
  @operation({
    summary: "Get Dxu",
  })
  @get()
  static getDxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxu",
  })
  @post("{id}")
  static createDxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
