import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfh")
export default class KfhController {
  @operation({
    summary: "Get Kfh",
  })
  @get()
  static getKfh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfh",
  })
  @post("{id}")
  static createKfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
