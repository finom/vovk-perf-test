import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boa")
export default class BoaController {
  @operation({
    summary: "Get Boa",
  })
  @get()
  static getBoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boa",
  })
  @post("{id}")
  static createBoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
