import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pg")
export default class PgController {
  @operation({
    summary: "Get Pg",
  })
  @get()
  static getPg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pg",
  })
  @post("{id}")
  static createPg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
