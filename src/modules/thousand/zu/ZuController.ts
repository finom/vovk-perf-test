import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zus")
export default class ZuController {
  @operation({
    summary: "Get Zus",
  })
  @get()
  static getZus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zu",
  })
  @post("{id}")
  static createZu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
