import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsj")
export default class HsjController {
  @operation({
    summary: "Get Hsj",
  })
  @get()
  static getHsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsj",
  })
  @post("{id}")
  static createHsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
