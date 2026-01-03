import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjrs")
export default class HjrController {
  @operation({
    summary: "Get Hjrs",
  })
  @get()
  static getHjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjr",
  })
  @post("{id}")
  static createHjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
