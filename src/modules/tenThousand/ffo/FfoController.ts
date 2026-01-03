import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffos")
export default class FfoController {
  @operation({
    summary: "Get Ffos",
  })
  @get()
  static getFfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffo",
  })
  @post("{id}")
  static createFfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
