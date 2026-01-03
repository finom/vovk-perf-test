import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azvs")
export default class AzvController {
  @operation({
    summary: "Get Azvs",
  })
  @get()
  static getAzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azv",
  })
  @post("{id}")
  static createAzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
