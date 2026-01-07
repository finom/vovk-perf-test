import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyf")
export default class CyfController {
  @operation({
    summary: "Get Cyf",
  })
  @get()
  static getCyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyf",
  })
  @post("{id}")
  static createCyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
