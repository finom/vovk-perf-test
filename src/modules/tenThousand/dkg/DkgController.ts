import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkg")
export default class DkgController {
  @operation({
    summary: "Get Dkg",
  })
  @get()
  static getDkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkg",
  })
  @post("{id}")
  static createDkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
