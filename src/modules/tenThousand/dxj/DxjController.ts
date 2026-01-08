import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxj")
export default class DxjController {
  @operation({
    summary: "Get Dxj",
  })
  @get()
  static getDxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxj",
  })
  @post("{id}")
  static createDxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
