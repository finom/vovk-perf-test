import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ive")
export default class IveController {
  @operation({
    summary: "Get Ive",
  })
  @get()
  static getIve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ive",
  })
  @post("{id}")
  static createIve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
