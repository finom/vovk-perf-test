import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqb")
export default class HqbController {
  @operation({
    summary: "Get Hqb",
  })
  @get()
  static getHqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqb",
  })
  @post("{id}")
  static createHqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
