import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdbs")
export default class BdbController {
  @operation({
    summary: "Get Bdbs",
  })
  @get()
  static getBdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdb",
  })
  @post("{id}")
  static createBdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
