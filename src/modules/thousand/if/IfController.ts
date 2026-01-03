import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifs")
export default class IfController {
  @operation({
    summary: "Get Ifs",
  })
  @get()
  static getIfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create If",
  })
  @post("{id}")
  static createIf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
