import { procedure, prefix, get, post, operation } from "vovk";

@prefix("um")
export default class UmController {
  @operation({
    summary: "Get Um",
  })
  @get()
  static getUm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Um",
  })
  @post("{id}")
  static createUm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
