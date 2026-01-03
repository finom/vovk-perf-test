import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuqs")
export default class CuqController {
  @operation({
    summary: "Get Cuqs",
  })
  @get()
  static getCuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuq",
  })
  @post("{id}")
  static createCuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
