import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuq")
export default class CuqController {
  @operation({
    summary: "Get Cuq",
  })
  @get()
  static getCuq = procedure({
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
