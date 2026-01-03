import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfls")
export default class DflController {
  @operation({
    summary: "Get Dfls",
  })
  @get()
  static getDfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfl",
  })
  @post("{id}")
  static createDfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
