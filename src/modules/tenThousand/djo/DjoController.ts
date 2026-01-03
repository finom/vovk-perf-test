import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djos")
export default class DjoController {
  @operation({
    summary: "Get Djos",
  })
  @get()
  static getDjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djo",
  })
  @post("{id}")
  static createDjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
