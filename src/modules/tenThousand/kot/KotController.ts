import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kot")
export default class KotController {
  @operation({
    summary: "Get Kot",
  })
  @get()
  static getKot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kot",
  })
  @post("{id}")
  static createKot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
