import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agy")
export default class AgyController {
  @operation({
    summary: "Get Agy",
  })
  @get()
  static getAgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agy",
  })
  @post("{id}")
  static createAgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
