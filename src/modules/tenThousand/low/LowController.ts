import { procedure, prefix, get, post, operation } from "vovk";

@prefix("low")
export default class LowController {
  @operation({
    summary: "Get Low",
  })
  @get()
  static getLow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Low",
  })
  @post("{id}")
  static createLow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
