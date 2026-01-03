import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arxes")
export default class ArxController {
  @operation({
    summary: "Get Arxes",
  })
  @get()
  static getArxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arx",
  })
  @post("{id}")
  static createArx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
