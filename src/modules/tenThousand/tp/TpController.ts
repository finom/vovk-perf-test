import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tps")
export default class TpController {
  @operation({
    summary: "Get Tps",
  })
  @get()
  static getTps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tp",
  })
  @post("{id}")
  static createTp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
