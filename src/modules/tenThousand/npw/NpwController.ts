import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npw")
export default class NpwController {
  @operation({
    summary: "Get Npw",
  })
  @get()
  static getNpw = procedure({
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
