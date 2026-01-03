import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahes")
export default class AheController {
  @operation({
    summary: "Get Ahes",
  })
  @get()
  static getAhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahe",
  })
  @post("{id}")
  static createAhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
