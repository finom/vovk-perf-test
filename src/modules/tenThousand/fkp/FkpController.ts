import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkps")
export default class FkpController {
  @operation({
    summary: "Get Fkps",
  })
  @get()
  static getFkps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkp",
  })
  @post("{id}")
  static createFkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
