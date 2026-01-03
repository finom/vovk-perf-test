import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juds")
export default class JudController {
  @operation({
    summary: "Get Juds",
  })
  @get()
  static getJuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jud",
  })
  @post("{id}")
  static createJud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
