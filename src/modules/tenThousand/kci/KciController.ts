import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kci")
export default class KciController {
  @operation({
    summary: "Get Kci",
  })
  @get()
  static getKci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kci",
  })
  @post("{id}")
  static createKci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
