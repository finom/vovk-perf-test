import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nohs")
export default class NohController {
  @operation({
    summary: "Get Nohs",
  })
  @get()
  static getNohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noh",
  })
  @post("{id}")
  static createNoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
