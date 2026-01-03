import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emfs")
export default class EmfController {
  @operation({
    summary: "Get Emfs",
  })
  @get()
  static getEmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emf",
  })
  @post("{id}")
  static createEmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
