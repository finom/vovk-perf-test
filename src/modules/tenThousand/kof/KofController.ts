import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kof")
export default class KofController {
  @operation({
    summary: "Get Kof",
  })
  @get()
  static getKof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kof",
  })
  @post("{id}")
  static createKof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
