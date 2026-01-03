import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arves")
export default class ArfController {
  @operation({
    summary: "Get Arves",
  })
  @get()
  static getArves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arf",
  })
  @post("{id}")
  static createArf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
