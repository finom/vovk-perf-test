import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuc")
export default class CucController {
  @operation({
    summary: "Get Cuc",
  })
  @get()
  static getCuc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cuc",
  })
  @post("{id}")
  static createCuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
