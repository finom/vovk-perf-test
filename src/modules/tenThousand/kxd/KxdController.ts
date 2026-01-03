import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxds")
export default class KxdController {
  @operation({
    summary: "Get Kxds",
  })
  @get()
  static getKxds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxd",
  })
  @post("{id}")
  static createKxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
