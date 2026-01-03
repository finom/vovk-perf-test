import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfws")
export default class DfwController {
  @operation({
    summary: "Get Dfws",
  })
  @get()
  static getDfws = procedure({
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
