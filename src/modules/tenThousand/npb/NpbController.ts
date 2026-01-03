import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npbs")
export default class NpbController {
  @operation({
    summary: "Get Npbs",
  })
  @get()
  static getNpbs = procedure({
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
