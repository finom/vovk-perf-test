import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfz")
export default class KfzController {
  @operation({
    summary: "Get Kfz",
  })
  @get()
  static getKfz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfz",
  })
  @post("{id}")
  static createKfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
