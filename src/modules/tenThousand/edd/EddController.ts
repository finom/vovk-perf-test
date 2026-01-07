import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edd")
export default class EddController {
  @operation({
    summary: "Get Edd",
  })
  @get()
  static getEdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edd",
  })
  @post("{id}")
  static createEdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
