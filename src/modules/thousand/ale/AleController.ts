import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ale")
export default class AleController {
  @operation({
    summary: "Get Ale",
  })
  @get()
  static getAle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ale",
  })
  @post("{id}")
  static createAle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
