import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drm")
export default class DrmController {
  @operation({
    summary: "Get Drm",
  })
  @get()
  static getDrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drm",
  })
  @post("{id}")
  static createDrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
