import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhws")
export default class JhwController {
  @operation({
    summary: "Get Jhws",
  })
  @get()
  static getJhws = procedure({
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
