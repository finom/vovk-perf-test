import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eig")
export default class EigController {
  @operation({
    summary: "Get Eig",
  })
  @get()
  static getEig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eig",
  })
  @post("{id}")
  static createEig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
