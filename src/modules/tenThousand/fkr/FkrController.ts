import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkrs")
export default class FkrController {
  @operation({
    summary: "Get Fkrs",
  })
  @get()
  static getFkrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkr",
  })
  @post("{id}")
  static createFkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
