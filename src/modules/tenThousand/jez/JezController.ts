import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jez")
export default class JezController {
  @operation({
    summary: "Get Jez",
  })
  @get()
  static getJez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jez",
  })
  @post("{id}")
  static createJez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
