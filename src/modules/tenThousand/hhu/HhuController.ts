import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhus")
export default class HhuController {
  @operation({
    summary: "Get Hhus",
  })
  @get()
  static getHhus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhu",
  })
  @post("{id}")
  static createHhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
