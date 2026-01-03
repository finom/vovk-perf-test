import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tzs")
export default class TzController {
  @operation({
    summary: "Get Tzs",
  })
  @get()
  static getTzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tz",
  })
  @post("{id}")
  static createTz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
