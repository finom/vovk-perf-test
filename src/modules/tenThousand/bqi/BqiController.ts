import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqi")
export default class BqiController {
  @operation({
    summary: "Get Bqi",
  })
  @get()
  static getBqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqi",
  })
  @post("{id}")
  static createBqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
