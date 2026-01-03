import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbies")
export default class HbyController {
  @operation({
    summary: "Get Hbies",
  })
  @get()
  static getHbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hby",
  })
  @post("{id}")
  static createHby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
