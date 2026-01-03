import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ios")
export default class IoController {
  @operation({
    summary: "Get Ios",
  })
  @get()
  static getIos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Io",
  })
  @post("{id}")
  static createIo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
