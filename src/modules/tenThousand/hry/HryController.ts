import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hry")
export default class HryController {
  @operation({
    summary: "Get Hry",
  })
  @get()
  static getHry = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hry",
  })
  @post("{id}")
  static createHry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
