import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aub")
export default class AubController {
  @operation({
    summary: "Get Aub",
  })
  @get()
  static getAub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aub",
  })
  @post("{id}")
  static createAub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
