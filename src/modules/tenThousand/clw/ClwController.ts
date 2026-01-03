import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clws")
export default class ClwController {
  @operation({
    summary: "Get Clws",
  })
  @get()
  static getClws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clw",
  })
  @post("{id}")
  static createClw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
