import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gils")
export default class GilController {
  @operation({
    summary: "Get Gils",
  })
  @get()
  static getGils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gil",
  })
  @post("{id}")
  static createGil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
