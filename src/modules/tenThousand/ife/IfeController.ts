import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifes")
export default class IfeController {
  @operation({
    summary: "Get Ifes",
  })
  @get()
  static getIfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ife",
  })
  @post("{id}")
  static createIfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
