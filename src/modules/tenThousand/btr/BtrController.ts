import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btr")
export default class BtrController {
  @operation({
    summary: "Get Btr",
  })
  @get()
  static getBtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btr",
  })
  @post("{id}")
  static createBtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
