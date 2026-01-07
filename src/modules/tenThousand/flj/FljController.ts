import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flj")
export default class FljController {
  @operation({
    summary: "Get Flj",
  })
  @get()
  static getFlj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flj",
  })
  @post("{id}")
  static createFlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
