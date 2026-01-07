import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npb")
export default class NpbController {
  @operation({
    summary: "Get Npb",
  })
  @get()
  static getNpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npb",
  })
  @post("{id}")
  static createNpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
