import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aols")
export default class AolController {
  @operation({
    summary: "Get Aols",
  })
  @get()
  static getAols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aol",
  })
  @post("{id}")
  static createAol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
