import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxk")
export default class DxkController {
  @operation({
    summary: "Get Dxk",
  })
  @get()
  static getDxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxk",
  })
  @post("{id}")
  static createDxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
