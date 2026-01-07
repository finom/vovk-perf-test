import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luu")
export default class LuuController {
  @operation({
    summary: "Get Luu",
  })
  @get()
  static getLuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luu",
  })
  @post("{id}")
  static createLuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
