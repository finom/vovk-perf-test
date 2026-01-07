import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwe")
export default class HweController {
  @operation({
    summary: "Get Hwe",
  })
  @get()
  static getHwe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwe",
  })
  @post("{id}")
  static createHwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
