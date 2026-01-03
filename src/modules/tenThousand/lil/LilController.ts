import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lils")
export default class LilController {
  @operation({
    summary: "Get Lils",
  })
  @get()
  static getLils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lil",
  })
  @post("{id}")
  static createLil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
