import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euts")
export default class EutController {
  @operation({
    summary: "Get Euts",
  })
  @get()
  static getEuts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eut",
  })
  @post("{id}")
  static createEut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
