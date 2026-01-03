import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnas")
export default class HnaController {
  @operation({
    summary: "Get Hnas",
  })
  @get()
  static getHnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hna",
  })
  @post("{id}")
  static createHna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
