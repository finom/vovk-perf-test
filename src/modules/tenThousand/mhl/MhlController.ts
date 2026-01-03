import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhls")
export default class MhlController {
  @operation({
    summary: "Get Mhls",
  })
  @get()
  static getMhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhl",
  })
  @post("{id}")
  static createMhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
