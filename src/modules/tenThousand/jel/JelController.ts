import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jels")
export default class JelController {
  @operation({
    summary: "Get Jels",
  })
  @get()
  static getJels = procedure({
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
