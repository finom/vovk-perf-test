import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfl")
export default class BflController {
  @operation({
    summary: "Get Bfl",
  })
  @get()
  static getBfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfl",
  })
  @post("{id}")
  static createBfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
