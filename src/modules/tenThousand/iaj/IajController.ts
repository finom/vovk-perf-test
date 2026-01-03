import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iajs")
export default class IajController {
  @operation({
    summary: "Get Iajs",
  })
  @get()
  static getIajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iaj",
  })
  @post("{id}")
  static createIaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
