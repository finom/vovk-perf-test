import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bir")
export default class BirController {
  @operation({
    summary: "Get Bir",
  })
  @get()
  static getBir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bir",
  })
  @post("{id}")
  static createBir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
