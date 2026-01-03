import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adxes")
export default class AdxController {
  @operation({
    summary: "Get Adxes",
  })
  @get()
  static getAdxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adx",
  })
  @post("{id}")
  static createAdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
