import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpj")
export default class GpjController {
  @operation({
    summary: "Get Gpj",
  })
  @get()
  static getGpj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpj",
  })
  @post("{id}")
  static createGpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
