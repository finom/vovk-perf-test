import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcfs")
export default class HcfController {
  @operation({
    summary: "Get Hcfs",
  })
  @get()
  static getHcfs = procedure({
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
