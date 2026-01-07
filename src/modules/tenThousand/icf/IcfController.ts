import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icf")
export default class IcfController {
  @operation({
    summary: "Get Icf",
  })
  @get()
  static getIcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icf",
  })
  @post("{id}")
  static createIcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
