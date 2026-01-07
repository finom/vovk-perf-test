import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lox")
export default class LoxController {
  @operation({
    summary: "Get Lox",
  })
  @get()
  static getLox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lox",
  })
  @post("{id}")
  static createLox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
