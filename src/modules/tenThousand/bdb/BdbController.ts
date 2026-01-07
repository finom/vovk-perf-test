import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdb")
export default class BdbController {
  @operation({
    summary: "Get Bdb",
  })
  @get()
  static getBdb = procedure({
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
