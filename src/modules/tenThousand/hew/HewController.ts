import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hews")
export default class HewController {
  @operation({
    summary: "Get Hews",
  })
  @get()
  static getHews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hew",
  })
  @post("{id}")
  static createHew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
