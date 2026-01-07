import { procedure, prefix, get, post, operation } from "vovk";

@prefix("got")
export default class GotController {
  @operation({
    summary: "Get Got",
  })
  @get()
  static getGot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Got",
  })
  @post("{id}")
  static createGot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
