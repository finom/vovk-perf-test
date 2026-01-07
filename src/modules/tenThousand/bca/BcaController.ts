import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bca")
export default class BcaController {
  @operation({
    summary: "Get Bca",
  })
  @get()
  static getBca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bca",
  })
  @post("{id}")
  static createBca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
