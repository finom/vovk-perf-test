import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cais")
export default class CaiController {
  @operation({
    summary: "Get Cais",
  })
  @get()
  static getCais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cai",
  })
  @post("{id}")
  static createCai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
