import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cos")
export default class CosController {
  @operation({
    summary: "Get Cos",
  })
  @get()
  static getCos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cos",
  })
  @post("{id}")
  static createCos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
