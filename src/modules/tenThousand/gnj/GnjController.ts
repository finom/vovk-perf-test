import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnj")
export default class GnjController {
  @operation({
    summary: "Get Gnj",
  })
  @get()
  static getGnj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnj",
  })
  @post("{id}")
  static createGnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
