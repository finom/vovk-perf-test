import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aer")
export default class AerController {
  @operation({
    summary: "Get Aer",
  })
  @get()
  static getAer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aer",
  })
  @post("{id}")
  static createAer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
