import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geb")
export default class GebController {
  @operation({
    summary: "Get Geb",
  })
  @get()
  static getGeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geb",
  })
  @post("{id}")
  static createGeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
