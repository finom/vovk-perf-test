import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkps")
export default class HkpController {
  @operation({
    summary: "Get Hkps",
  })
  @get()
  static getHkps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkp",
  })
  @post("{id}")
  static createHkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
