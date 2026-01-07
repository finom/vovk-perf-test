import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmv")
export default class DmvController {
  @operation({
    summary: "Get Dmv",
  })
  @get()
  static getDmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmv",
  })
  @post("{id}")
  static createDmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
