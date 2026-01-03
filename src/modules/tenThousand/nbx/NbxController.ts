import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbxes")
export default class NbxController {
  @operation({
    summary: "Get Nbxes",
  })
  @get()
  static getNbxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbx",
  })
  @post("{id}")
  static createNbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
