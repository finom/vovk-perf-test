import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icjs")
export default class IcjController {
  @operation({
    summary: "Get Icjs",
  })
  @get()
  static getIcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icj",
  })
  @post("{id}")
  static createIcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
