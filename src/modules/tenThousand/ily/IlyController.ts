import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ily")
export default class IlyController {
  @operation({
    summary: "Get Ily",
  })
  @get()
  static getIly = procedure({
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
