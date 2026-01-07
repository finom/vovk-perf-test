import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqg")
export default class IqgController {
  @operation({
    summary: "Get Iqg",
  })
  @get()
  static getIqg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqg",
  })
  @post("{id}")
  static createIqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
