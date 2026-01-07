import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emf")
export default class EmfController {
  @operation({
    summary: "Get Emf",
  })
  @get()
  static getEmf = procedure({
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
