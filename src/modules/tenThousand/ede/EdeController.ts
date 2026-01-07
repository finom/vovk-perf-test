import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ede")
export default class EdeController {
  @operation({
    summary: "Get Ede",
  })
  @get()
  static getEde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ede",
  })
  @post("{id}")
  static createEde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
