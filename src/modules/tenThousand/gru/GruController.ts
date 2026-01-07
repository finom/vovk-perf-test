import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gru")
export default class GruController {
  @operation({
    summary: "Get Gru",
  })
  @get()
  static getGru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gru",
  })
  @post("{id}")
  static createGru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
