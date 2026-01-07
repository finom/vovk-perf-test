import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkd")
export default class FkdController {
  @operation({
    summary: "Get Fkd",
  })
  @get()
  static getFkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkd",
  })
  @post("{id}")
  static createFkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
