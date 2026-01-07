import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaw")
export default class KawController {
  @operation({
    summary: "Get Kaw",
  })
  @get()
  static getKaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kaw",
  })
  @post("{id}")
  static createKaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
