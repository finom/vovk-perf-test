import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erfs")
export default class ErfController {
  @operation({
    summary: "Get Erfs",
  })
  @get()
  static getErfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erf",
  })
  @post("{id}")
  static createErf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
