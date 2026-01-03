import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebws")
export default class EbwController {
  @operation({
    summary: "Get Ebws",
  })
  @get()
  static getEbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebw",
  })
  @post("{id}")
  static createEbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
