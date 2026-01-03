import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fun")
export default class FunController {
  @operation({
    summary: "Get Fun",
  })
  @get()
  static getFun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fun",
  })
  @post("{id}")
  static createFun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
