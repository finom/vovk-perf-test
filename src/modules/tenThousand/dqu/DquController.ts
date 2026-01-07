import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqu")
export default class DquController {
  @operation({
    summary: "Get Dqu",
  })
  @get()
  static getDqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqu",
  })
  @post("{id}")
  static createDqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
