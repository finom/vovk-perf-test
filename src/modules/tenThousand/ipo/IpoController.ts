import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipo")
export default class IpoController {
  @operation({
    summary: "Get Ipo",
  })
  @get()
  static getIpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipo",
  })
  @post("{id}")
  static createIpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
