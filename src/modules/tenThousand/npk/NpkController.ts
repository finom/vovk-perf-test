import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npk")
export default class NpkController {
  @operation({
    summary: "Get Npk",
  })
  @get()
  static getNpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npk",
  })
  @post("{id}")
  static createNpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
