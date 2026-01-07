import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiv")
export default class HivController {
  @operation({
    summary: "Get Hiv",
  })
  @get()
  static getHiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hiv",
  })
  @post("{id}")
  static createHiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
