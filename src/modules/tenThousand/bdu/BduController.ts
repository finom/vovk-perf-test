import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdus")
export default class BduController {
  @operation({
    summary: "Get Bdus",
  })
  @get()
  static getBdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdu",
  })
  @post("{id}")
  static createBdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
