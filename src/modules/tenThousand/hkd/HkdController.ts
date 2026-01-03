import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkds")
export default class HkdController {
  @operation({
    summary: "Get Hkds",
  })
  @get()
  static getHkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkd",
  })
  @post("{id}")
  static createHkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
