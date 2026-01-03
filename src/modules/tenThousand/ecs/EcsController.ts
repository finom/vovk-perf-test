import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecs")
export default class EcsController {
  @operation({
    summary: "Get Ecs",
  })
  @get()
  static getEcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecs",
  })
  @post("{id}")
  static createEcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
