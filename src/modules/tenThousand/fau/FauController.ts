import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faus")
export default class FauController {
  @operation({
    summary: "Get Faus",
  })
  @get()
  static getFaus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fau",
  })
  @post("{id}")
  static createFau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
