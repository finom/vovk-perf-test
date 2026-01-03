import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkos")
export default class HkoController {
  @operation({
    summary: "Get Hkos",
  })
  @get()
  static getHkos = procedure({
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
