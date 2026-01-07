import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kug")
export default class KugController {
  @operation({
    summary: "Get Kug",
  })
  @get()
  static getKug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kug",
  })
  @post("{id}")
  static createKug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
