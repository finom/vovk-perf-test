import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgi")
export default class BgiController {
  @operation({
    summary: "Get Bgi",
  })
  @get()
  static getBgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgi",
  })
  @post("{id}")
  static createBgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
