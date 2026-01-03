import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loxen")
export default class LoxController {
  @operation({
    summary: "Get Loxen",
  })
  @get()
  static getLoxen = procedure({
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
