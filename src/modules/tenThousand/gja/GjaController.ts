import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gja")
export default class GjaController {
  @operation({
    summary: "Get Gja",
  })
  @get()
  static getGja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gja",
  })
  @post("{id}")
  static createGja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
