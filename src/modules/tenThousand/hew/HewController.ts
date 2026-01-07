import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hew")
export default class HewController {
  @operation({
    summary: "Get Hew",
  })
  @get()
  static getHew = procedure({
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
