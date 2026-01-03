import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdus")
export default class KduController {
  @operation({
    summary: "Get Kdus",
  })
  @get()
  static getKdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdu",
  })
  @post("{id}")
  static createKdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
