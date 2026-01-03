import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqrs")
export default class GqrController {
  @operation({
    summary: "Get Gqrs",
  })
  @get()
  static getGqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqr",
  })
  @post("{id}")
  static createGqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
