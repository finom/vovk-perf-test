import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpy")
export default class BpyController {
  @operation({
    summary: "Get Bpy",
  })
  @get()
  static getBpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpy",
  })
  @post("{id}")
  static createBpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
