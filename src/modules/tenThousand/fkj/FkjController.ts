import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkj")
export default class FkjController {
  @operation({
    summary: "Get Fkj",
  })
  @get()
  static getFkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkj",
  })
  @post("{id}")
  static createFkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
