import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amb")
export default class AmbController {
  @operation({
    summary: "Get Amb",
  })
  @get()
  static getAmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amb",
  })
  @post("{id}")
  static createAmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
