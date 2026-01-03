import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhas")
export default class HhaController {
  @operation({
    summary: "Get Hhas",
  })
  @get()
  static getHhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hha",
  })
  @post("{id}")
  static createHha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
