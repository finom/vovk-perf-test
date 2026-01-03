import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlxes")
export default class MlxController {
  @operation({
    summary: "Get Mlxes",
  })
  @get()
  static getMlxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlx",
  })
  @post("{id}")
  static createMlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
