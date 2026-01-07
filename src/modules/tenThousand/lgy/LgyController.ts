import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgy")
export default class LgyController {
  @operation({
    summary: "Get Lgy",
  })
  @get()
  static getLgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgy",
  })
  @post("{id}")
  static createLgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
