import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejvs")
export default class EjvController {
  @operation({
    summary: "Get Ejvs",
  })
  @get()
  static getEjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejv",
  })
  @post("{id}")
  static createEjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
