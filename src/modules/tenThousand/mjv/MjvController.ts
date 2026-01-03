import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjvs")
export default class MjvController {
  @operation({
    summary: "Get Mjvs",
  })
  @get()
  static getMjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mjv",
  })
  @post("{id}")
  static createMjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
