import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acfs")
export default class AcfController {
  @operation({
    summary: "Get Acfs",
  })
  @get()
  static getAcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acf",
  })
  @post("{id}")
  static createAcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
