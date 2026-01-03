import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npqs")
export default class NpqController {
  @operation({
    summary: "Get Npqs",
  })
  @get()
  static getNpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npq",
  })
  @post("{id}")
  static createNpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
