import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isus")
export default class IsuController {
  @operation({
    summary: "Get Isus",
  })
  @get()
  static getIsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isu",
  })
  @post("{id}")
  static createIsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
