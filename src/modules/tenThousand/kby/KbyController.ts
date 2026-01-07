import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kby")
export default class KbyController {
  @operation({
    summary: "Get Kby",
  })
  @get()
  static getKby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kby",
  })
  @post("{id}")
  static createKby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
