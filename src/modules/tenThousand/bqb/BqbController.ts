import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqb")
export default class BqbController {
  @operation({
    summary: "Get Bqb",
  })
  @get()
  static getBqb = procedure({
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
