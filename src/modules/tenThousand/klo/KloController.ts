import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klo")
export default class KloController {
  @operation({
    summary: "Get Klo",
  })
  @get()
  static getKlo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klo",
  })
  @post("{id}")
  static createKlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
