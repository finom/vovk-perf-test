import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaj")
export default class IajController {
  @operation({
    summary: "Get Iaj",
  })
  @get()
  static getIaj = procedure({
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
