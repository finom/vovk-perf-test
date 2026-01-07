import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eja")
export default class EjaController {
  @operation({
    summary: "Get Eja",
  })
  @get()
  static getEja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eja",
  })
  @post("{id}")
  static createEja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
