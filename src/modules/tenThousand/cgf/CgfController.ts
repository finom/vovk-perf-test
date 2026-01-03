import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgfs")
export default class CgfController {
  @operation({
    summary: "Get Cgfs",
  })
  @get()
  static getCgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgf",
  })
  @post("{id}")
  static createCgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
