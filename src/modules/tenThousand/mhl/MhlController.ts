import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhl")
export default class MhlController {
  @operation({
    summary: "Get Mhl",
  })
  @get()
  static getMhl = procedure({
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
