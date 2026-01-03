import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lags")
export default class LagController {
  @operation({
    summary: "Get Lags",
  })
  @get()
  static getLags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lag",
  })
  @post("{id}")
  static createLag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
