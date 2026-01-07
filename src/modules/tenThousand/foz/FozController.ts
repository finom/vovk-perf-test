import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foz")
export default class FozController {
  @operation({
    summary: "Get Foz",
  })
  @get()
  static getFoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foz",
  })
  @post("{id}")
  static createFoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
