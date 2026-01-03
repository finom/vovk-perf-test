import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyls")
export default class CylController {
  @operation({
    summary: "Get Cyls",
  })
  @get()
  static getCyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyl",
  })
  @post("{id}")
  static createCyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
