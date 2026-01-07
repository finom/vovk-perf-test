import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dam")
export default class DamController {
  @operation({
    summary: "Get Dam",
  })
  @get()
  static getDam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dam",
  })
  @post("{id}")
  static createDam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
