import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bois")
export default class BoiController {
  @operation({
    summary: "Get Bois",
  })
  @get()
  static getBois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boi",
  })
  @post("{id}")
  static createBoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
