import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijp")
export default class IjpController {
  @operation({
    summary: "Get Ijp",
  })
  @get()
  static getIjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijp",
  })
  @post("{id}")
  static createIjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
