import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxc")
export default class DxcController {
  @operation({
    summary: "Get Dxc",
  })
  @get()
  static getDxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxc",
  })
  @post("{id}")
  static createDxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
