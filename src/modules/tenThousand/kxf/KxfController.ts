import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxf")
export default class KxfController {
  @operation({
    summary: "Get Kxf",
  })
  @get()
  static getKxf = procedure({
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
