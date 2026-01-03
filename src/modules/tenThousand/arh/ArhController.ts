import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arhs")
export default class ArhController {
  @operation({
    summary: "Get Arhs",
  })
  @get()
  static getArhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arh",
  })
  @post("{id}")
  static createArh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
