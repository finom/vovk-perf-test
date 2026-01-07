import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhd")
export default class HhdController {
  @operation({
    summary: "Get Hhd",
  })
  @get()
  static getHhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhd",
  })
  @post("{id}")
  static createHhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
