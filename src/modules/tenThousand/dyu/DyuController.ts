import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyus")
export default class DyuController {
  @operation({
    summary: "Get Dyus",
  })
  @get()
  static getDyus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyu",
  })
  @post("{id}")
  static createDyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
