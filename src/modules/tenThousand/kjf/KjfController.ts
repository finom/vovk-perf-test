import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjfs")
export default class KjfController {
  @operation({
    summary: "Get Kjfs",
  })
  @get()
  static getKjfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjf",
  })
  @post("{id}")
  static createKjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
