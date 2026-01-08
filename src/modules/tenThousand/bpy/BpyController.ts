import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpy")
export default class BpyController {
  @operation({
    summary: "Get Bpy",
  })
  @get()
  static getBpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpy",
  })
  @post("{id}")
  static createBpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
