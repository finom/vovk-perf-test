import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fub")
export default class FubController {
  @operation({
    summary: "Get Fub",
  })
  @get()
  static getFub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fub",
  })
  @post("{id}")
  static createFub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
