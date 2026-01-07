import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcf")
export default class HcfController {
  @operation({
    summary: "Get Hcf",
  })
  @get()
  static getHcf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcf",
  })
  @post("{id}")
  static createHcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
