import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgms")
export default class CgmController {
  @operation({
    summary: "Get Cgms",
  })
  @get()
  static getCgms = procedure({
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
