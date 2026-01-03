import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdes")
export default class BdeController {
  @operation({
    summary: "Get Bdes",
  })
  @get()
  static getBdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bde",
  })
  @post("{id}")
  static createBde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
