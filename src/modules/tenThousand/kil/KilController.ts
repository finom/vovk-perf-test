import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kils")
export default class KilController {
  @operation({
    summary: "Get Kils",
  })
  @get()
  static getKils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kil",
  })
  @post("{id}")
  static createKil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
