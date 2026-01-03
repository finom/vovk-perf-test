import { procedure, prefix, get, post, operation } from "vovk";

@prefix("its")
export default class ItsController {
  @operation({
    summary: "Get Its",
  })
  @get()
  static getIts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Its",
  })
  @post("{id}")
  static createIts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
