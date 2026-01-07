import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbc")
export default class DbcController {
  @operation({
    summary: "Get Dbc",
  })
  @get()
  static getDbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbc",
  })
  @post("{id}")
  static createDbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
