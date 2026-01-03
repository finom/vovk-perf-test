import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efls")
export default class EflController {
  @operation({
    summary: "Get Efls",
  })
  @get()
  static getEfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efl",
  })
  @post("{id}")
  static createEfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
