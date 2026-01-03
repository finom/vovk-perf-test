import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqfs")
export default class AqfController {
  @operation({
    summary: "Get Aqfs",
  })
  @get()
  static getAqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqf",
  })
  @post("{id}")
  static createAqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
