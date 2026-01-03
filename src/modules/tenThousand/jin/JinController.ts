import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jins")
export default class JinController {
  @operation({
    summary: "Get Jins",
  })
  @get()
  static getJins = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jin",
  })
  @post("{id}")
  static createJin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
