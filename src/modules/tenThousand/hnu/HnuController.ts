import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnus")
export default class HnuController {
  @operation({
    summary: "Get Hnus",
  })
  @get()
  static getHnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnu",
  })
  @post("{id}")
  static createHnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
