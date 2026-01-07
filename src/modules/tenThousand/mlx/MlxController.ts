import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlx")
export default class MlxController {
  @operation({
    summary: "Get Mlx",
  })
  @get()
  static getMlx = procedure({
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
