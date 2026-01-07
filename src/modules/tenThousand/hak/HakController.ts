import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hak")
export default class HakController {
  @operation({
    summary: "Get Hak",
  })
  @get()
  static getHak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hak",
  })
  @post("{id}")
  static createHak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
