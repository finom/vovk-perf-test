import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyrs")
export default class KyrController {
  @operation({
    summary: "Get Kyrs",
  })
  @get()
  static getKyrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyr",
  })
  @post("{id}")
  static createKyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
