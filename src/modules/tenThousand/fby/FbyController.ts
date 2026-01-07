import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fby")
export default class FbyController {
  @operation({
    summary: "Get Fby",
  })
  @get()
  static getFby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fby",
  })
  @post("{id}")
  static createFby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
