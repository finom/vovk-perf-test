import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hge")
export default class HgeController {
  @operation({
    summary: "Get Hge",
  })
  @get()
  static getHge = procedure({
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
