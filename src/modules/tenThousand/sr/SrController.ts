import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sr")
export default class SrController {
  @operation({
    summary: "Get Sr",
  })
  @get()
  static getSr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sr",
  })
  @post("{id}")
  static createSr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
