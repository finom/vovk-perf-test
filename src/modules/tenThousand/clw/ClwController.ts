import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clw")
export default class ClwController {
  @operation({
    summary: "Get Clw",
  })
  @get()
  static getClw = procedure({
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
