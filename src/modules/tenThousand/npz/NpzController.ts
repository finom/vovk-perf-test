import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npzs")
export default class NpzController {
  @operation({
    summary: "Get Npzs",
  })
  @get()
  static getNpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npz",
  })
  @post("{id}")
  static createNpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
