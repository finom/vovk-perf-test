import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayes")
export default class AyeController {
  @operation({
    summary: "Get Ayes",
  })
  @get()
  static getAyes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aye",
  })
  @post("{id}")
  static createAye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
