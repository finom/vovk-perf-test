import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wb")
export default class WbController {
  @operation({
    summary: "Get Wb",
  })
  @get()
  static getWb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wb",
  })
  @post("{id}")
  static createWb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
