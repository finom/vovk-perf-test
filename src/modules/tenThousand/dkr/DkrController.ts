import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkr")
export default class DkrController {
  @operation({
    summary: "Get Dkr",
  })
  @get()
  static getDkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkr",
  })
  @post("{id}")
  static createDkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
