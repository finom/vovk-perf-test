import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgm")
export default class CgmController {
  @operation({
    summary: "Get Cgm",
  })
  @get()
  static getCgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgm",
  })
  @post("{id}")
  static createCgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
