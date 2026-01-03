import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyrs")
export default class EyrController {
  @operation({
    summary: "Get Eyrs",
  })
  @get()
  static getEyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyr",
  })
  @post("{id}")
  static createEyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
