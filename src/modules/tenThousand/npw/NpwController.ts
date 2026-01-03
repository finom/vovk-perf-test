import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npws")
export default class NpwController {
  @operation({
    summary: "Get Npws",
  })
  @get()
  static getNpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npw",
  })
  @post("{id}")
  static createNpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
