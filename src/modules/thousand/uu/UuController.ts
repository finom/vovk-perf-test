import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uus")
export default class UuController {
  @operation({
    summary: "Get Uus",
  })
  @get()
  static getUus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uu",
  })
  @post("{id}")
  static createUu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
