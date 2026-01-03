import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqies")
export default class AqyController {
  @operation({
    summary: "Get Aqies",
  })
  @get()
  static getAqies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqy",
  })
  @post("{id}")
  static createAqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
