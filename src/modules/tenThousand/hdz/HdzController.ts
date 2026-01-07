import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdz")
export default class HdzController {
  @operation({
    summary: "Get Hdz",
  })
  @get()
  static getHdz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdz",
  })
  @post("{id}")
  static createHdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
