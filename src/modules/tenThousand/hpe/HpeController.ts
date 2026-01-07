import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpe")
export default class HpeController {
  @operation({
    summary: "Get Hpe",
  })
  @get()
  static getHpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpe",
  })
  @post("{id}")
  static createHpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
