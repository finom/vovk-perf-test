import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijus")
export default class IjuController {
  @operation({
    summary: "Get Ijus",
  })
  @get()
  static getIjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iju",
  })
  @post("{id}")
  static createIju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
