import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaj")
export default class AajController {
  @operation({
    summary: "Get Aaj",
  })
  @get()
  static getAaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaj",
  })
  @post("{id}")
  static createAaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
