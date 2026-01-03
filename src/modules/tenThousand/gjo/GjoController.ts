import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjos")
export default class GjoController {
  @operation({
    summary: "Get Gjos",
  })
  @get()
  static getGjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjo",
  })
  @post("{id}")
  static createGjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
