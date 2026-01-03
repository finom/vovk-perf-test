import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkds")
export default class FkdController {
  @operation({
    summary: "Get Fkds",
  })
  @get()
  static getFkds = procedure({
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
