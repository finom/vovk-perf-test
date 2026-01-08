import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbx")
export default class FbxController {
  @operation({
    summary: "Get Fbx",
  })
  @get()
  static getFbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbx",
  })
  @post("{id}")
  static createFbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
