import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilies")
export default class IlyController {
  @operation({
    summary: "Get Ilies",
  })
  @get()
  static getIlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ily",
  })
  @post("{id}")
  static createIly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
