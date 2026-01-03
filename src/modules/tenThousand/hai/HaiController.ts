import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hais")
export default class HaiController {
  @operation({
    summary: "Get Hais",
  })
  @get()
  static getHais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hai",
  })
  @post("{id}")
  static createHai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
