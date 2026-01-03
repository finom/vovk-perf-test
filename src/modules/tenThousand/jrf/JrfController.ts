import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrfs")
export default class JrfController {
  @operation({
    summary: "Get Jrfs",
  })
  @get()
  static getJrfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrf",
  })
  @post("{id}")
  static createJrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
