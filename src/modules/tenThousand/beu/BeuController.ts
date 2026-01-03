import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beus")
export default class BeuController {
  @operation({
    summary: "Get Beus",
  })
  @get()
  static getBeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beu",
  })
  @post("{id}")
  static createBeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
