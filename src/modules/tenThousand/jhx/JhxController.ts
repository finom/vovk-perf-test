import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhxes")
export default class JhxController {
  @operation({
    summary: "Get Jhxes",
  })
  @get()
  static getJhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhx",
  })
  @post("{id}")
  static createJhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
