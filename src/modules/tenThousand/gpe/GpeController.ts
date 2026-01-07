import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpe")
export default class GpeController {
  @operation({
    summary: "Get Gpe",
  })
  @get()
  static getGpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpe",
  })
  @post("{id}")
  static createGpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
