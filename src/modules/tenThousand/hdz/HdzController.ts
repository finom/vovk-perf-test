import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdzs")
export default class HdzController {
  @operation({
    summary: "Get Hdzs",
  })
  @get()
  static getHdzs = procedure({
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
