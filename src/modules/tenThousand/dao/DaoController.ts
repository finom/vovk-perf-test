import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daos")
export default class DaoController {
  @operation({
    summary: "Get Daos",
  })
  @get()
  static getDaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dao",
  })
  @post("{id}")
  static createDao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
