import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhrs")
export default class HhrController {
  @operation({
    summary: "Get Hhrs",
  })
  @get()
  static getHhrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhr",
  })
  @post("{id}")
  static createHhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
