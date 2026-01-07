import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoc")
export default class EocController {
  @operation({
    summary: "Get Eoc",
  })
  @get()
  static getEoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoc",
  })
  @post("{id}")
  static createEoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
