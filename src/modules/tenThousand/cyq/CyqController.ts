import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyq")
export default class CyqController {
  @operation({
    summary: "Get Cyq",
  })
  @get()
  static getCyq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyq",
  })
  @post("{id}")
  static createCyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
