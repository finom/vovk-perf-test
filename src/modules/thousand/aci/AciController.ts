import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aci")
export default class AciController {
  @operation({
    summary: "Get Aci",
  })
  @get()
  static getAci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aci",
  })
  @post("{id}")
  static createAci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
