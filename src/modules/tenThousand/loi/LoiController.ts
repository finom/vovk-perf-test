import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lois")
export default class LoiController {
  @operation({
    summary: "Get Lois",
  })
  @get()
  static getLois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loi",
  })
  @post("{id}")
  static createLoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
