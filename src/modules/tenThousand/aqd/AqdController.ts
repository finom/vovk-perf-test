import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqd")
export default class AqdController {
  @operation({
    summary: "Get Aqd",
  })
  @get()
  static getAqd = procedure({
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
