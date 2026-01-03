import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehfs")
export default class EhfController {
  @operation({
    summary: "Get Ehfs",
  })
  @get()
  static getEhfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehf",
  })
  @post("{id}")
  static createEhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
