import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dx")
export default class DxController {
  @operation({
    summary: "Get Dx",
  })
  @get()
  static getDx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dx",
  })
  @post("{id}")
  static createDx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
