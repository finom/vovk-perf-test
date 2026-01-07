import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgi")
export default class KgiController {
  @operation({
    summary: "Get Kgi",
  })
  @get()
  static getKgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgi",
  })
  @post("{id}")
  static createKgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
