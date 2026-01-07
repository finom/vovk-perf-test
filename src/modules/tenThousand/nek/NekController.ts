import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nek")
export default class NekController {
  @operation({
    summary: "Get Nek",
  })
  @get()
  static getNek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nek",
  })
  @post("{id}")
  static createNek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
