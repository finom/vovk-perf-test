import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czg")
export default class CzgController {
  @operation({
    summary: "Get Czg",
  })
  @get()
  static getCzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czg",
  })
  @post("{id}")
  static createCzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
