import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ills")
export default class IllController {
  @operation({
    summary: "Get Ills",
  })
  @get()
  static getIlls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ill",
  })
  @post("{id}")
  static createIll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
