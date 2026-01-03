import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqs")
export default class CqsController {
  @operation({
    summary: "Get Cqs",
  })
  @get()
  static getCqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqs",
  })
  @post("{id}")
  static createCqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
