import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqds")
export default class AqdController {
  @operation({
    summary: "Get Aqds",
  })
  @get()
  static getAqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqd",
  })
  @post("{id}")
  static createAqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
