import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghls")
export default class GhlController {
  @operation({
    summary: "Get Ghls",
  })
  @get()
  static getGhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghl",
  })
  @post("{id}")
  static createGhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
