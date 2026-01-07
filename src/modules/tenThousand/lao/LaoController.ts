import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lao")
export default class LaoController {
  @operation({
    summary: "Get Lao",
  })
  @get()
  static getLao = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lao",
  })
  @post("{id}")
  static createLao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
