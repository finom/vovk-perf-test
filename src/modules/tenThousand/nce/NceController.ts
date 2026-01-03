import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nces")
export default class NceController {
  @operation({
    summary: "Get Nces",
  })
  @get()
  static getNces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nce",
  })
  @post("{id}")
  static createNce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
