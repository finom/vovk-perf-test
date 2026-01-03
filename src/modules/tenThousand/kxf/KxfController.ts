import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxfs")
export default class KxfController {
  @operation({
    summary: "Get Kxfs",
  })
  @get()
  static getKxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxf",
  })
  @post("{id}")
  static createKxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
