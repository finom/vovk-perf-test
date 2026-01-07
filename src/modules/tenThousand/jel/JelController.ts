import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jel")
export default class JelController {
  @operation({
    summary: "Get Jel",
  })
  @get()
  static getJel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jel",
  })
  @post("{id}")
  static createJel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
