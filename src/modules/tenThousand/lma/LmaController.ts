import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmas")
export default class LmaController {
  @operation({
    summary: "Get Lmas",
  })
  @get()
  static getLmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lma",
  })
  @post("{id}")
  static createLma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
