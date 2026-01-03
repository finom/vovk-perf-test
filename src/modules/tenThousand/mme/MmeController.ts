import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmes")
export default class MmeController {
  @operation({
    summary: "Get Mmes",
  })
  @get()
  static getMmes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mme",
  })
  @post("{id}")
  static createMme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
