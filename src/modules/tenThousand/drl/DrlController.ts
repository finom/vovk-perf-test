import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drls")
export default class DrlController {
  @operation({
    summary: "Get Drls",
  })
  @get()
  static getDrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drl",
  })
  @post("{id}")
  static createDrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
