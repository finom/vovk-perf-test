import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aers")
export default class AerController {
  @operation({
    summary: "Get Aers",
  })
  @get()
  static getAers = procedure({
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
