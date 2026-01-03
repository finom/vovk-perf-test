import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibws")
export default class IbwController {
  @operation({
    summary: "Get Ibws",
  })
  @get()
  static getIbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibw",
  })
  @post("{id}")
  static createIbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
