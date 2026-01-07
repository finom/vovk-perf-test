import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arx")
export default class ArxController {
  @operation({
    summary: "Get Arx",
  })
  @get()
  static getArx = procedure({
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
