import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kef")
export default class KefController {
  @operation({
    summary: "Get Kef",
  })
  @get()
  static getKef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kef",
  })
  @post("{id}")
  static createKef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
