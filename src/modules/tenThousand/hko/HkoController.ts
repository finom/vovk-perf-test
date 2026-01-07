import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hko")
export default class HkoController {
  @operation({
    summary: "Get Hko",
  })
  @get()
  static getHko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hko",
  })
  @post("{id}")
  static createHko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
