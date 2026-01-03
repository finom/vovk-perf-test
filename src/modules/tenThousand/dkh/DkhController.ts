import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkhs")
export default class DkhController {
  @operation({
    summary: "Get Dkhs",
  })
  @get()
  static getDkhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkh",
  })
  @post("{id}")
  static createDkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
