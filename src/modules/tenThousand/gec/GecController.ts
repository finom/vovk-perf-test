import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gec")
export default class GecController {
  @operation({
    summary: "Get Gec",
  })
  @get()
  static getGec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gec",
  })
  @post("{id}")
  static createGec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
