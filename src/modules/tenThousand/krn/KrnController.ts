import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krn")
export default class KrnController {
  @operation({
    summary: "Get Krn",
  })
  @get()
  static getKrn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krn",
  })
  @post("{id}")
  static createKrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
