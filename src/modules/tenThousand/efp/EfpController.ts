import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efp")
export default class EfpController {
  @operation({
    summary: "Get Efp",
  })
  @get()
  static getEfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efp",
  })
  @post("{id}")
  static createEfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
