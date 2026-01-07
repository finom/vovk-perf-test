import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfw")
export default class DfwController {
  @operation({
    summary: "Get Dfw",
  })
  @get()
  static getDfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfw",
  })
  @post("{id}")
  static createDfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
