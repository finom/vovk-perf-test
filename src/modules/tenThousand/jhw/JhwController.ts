import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhw")
export default class JhwController {
  @operation({
    summary: "Get Jhw",
  })
  @get()
  static getJhw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhw",
  })
  @post("{id}")
  static createJhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
