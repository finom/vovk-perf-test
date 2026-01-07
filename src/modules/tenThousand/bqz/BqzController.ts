import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqz")
export default class BqzController {
  @operation({
    summary: "Get Bqz",
  })
  @get()
  static getBqz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqz",
  })
  @post("{id}")
  static createBqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
