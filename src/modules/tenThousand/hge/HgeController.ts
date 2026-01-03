import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hges")
export default class HgeController {
  @operation({
    summary: "Get Hges",
  })
  @get()
  static getHges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hge",
  })
  @post("{id}")
  static createHge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
