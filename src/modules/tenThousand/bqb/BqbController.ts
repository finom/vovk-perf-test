import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqbs")
export default class BqbController {
  @operation({
    summary: "Get Bqbs",
  })
  @get()
  static getBqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqb",
  })
  @post("{id}")
  static createBqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
