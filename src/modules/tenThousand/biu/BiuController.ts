import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biu")
export default class BiuController {
  @operation({
    summary: "Get Biu",
  })
  @get()
  static getBiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biu",
  })
  @post("{id}")
  static createBiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
