import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aries")
export default class AryController {
  @operation({
    summary: "Get Aries",
  })
  @get()
  static getAries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ary",
  })
  @post("{id}")
  static createAry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
