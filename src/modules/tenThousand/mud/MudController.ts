import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mud")
export default class MudController {
  @operation({
    summary: "Get Mud",
  })
  @get()
  static getMud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mud",
  })
  @post("{id}")
  static createMud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
