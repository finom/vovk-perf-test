import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coes")
export default class CoeController {
  @operation({
    summary: "Get Coes",
  })
  @get()
  static getCoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coe",
  })
  @post("{id}")
  static createCoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
