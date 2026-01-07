import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjv")
export default class MjvController {
  @operation({
    summary: "Get Mjv",
  })
  @get()
  static getMjv = procedure({
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
