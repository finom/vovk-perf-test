import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaj")
export default class JajController {
  @operation({
    summary: "Get Jaj",
  })
  @get()
  static getJaj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaj",
  })
  @post("{id}")
  static createJaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
