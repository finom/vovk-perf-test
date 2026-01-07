import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mot")
export default class MotController {
  @operation({
    summary: "Get Mot",
  })
  @get()
  static getMot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mot",
  })
  @post("{id}")
  static createMot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
