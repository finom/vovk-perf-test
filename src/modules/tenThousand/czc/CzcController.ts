import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czc")
export default class CzcController {
  @operation({
    summary: "Get Czc",
  })
  @get()
  static getCzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czc",
  })
  @post("{id}")
  static createCzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
