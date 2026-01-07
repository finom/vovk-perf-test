import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpl")
export default class HplController {
  @operation({
    summary: "Get Hpl",
  })
  @get()
  static getHpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpl",
  })
  @post("{id}")
  static createHpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
