import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uc")
export default class UcController {
  @operation({
    summary: "Get Uc",
  })
  @get()
  static getUc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uc",
  })
  @post("{id}")
  static createUc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
