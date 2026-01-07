import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzt")
export default class LztController {
  @operation({
    summary: "Get Lzt",
  })
  @get()
  static getLzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzt",
  })
  @post("{id}")
  static createLzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
