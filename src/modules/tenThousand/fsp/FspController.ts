import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsps")
export default class FspController {
  @operation({
    summary: "Get Fsps",
  })
  @get()
  static getFsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsp",
  })
  @post("{id}")
  static createFsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
