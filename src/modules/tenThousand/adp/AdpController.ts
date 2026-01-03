import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adps")
export default class AdpController {
  @operation({
    summary: "Get Adps",
  })
  @get()
  static getAdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adp",
  })
  @post("{id}")
  static createAdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
