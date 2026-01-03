import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iches")
export default class IchController {
  @operation({
    summary: "Get Iches",
  })
  @get()
  static getIches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ich",
  })
  @post("{id}")
  static createIch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
