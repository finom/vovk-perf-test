import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inws")
export default class InwController {
  @operation({
    summary: "Get Inws",
  })
  @get()
  static getInws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inw",
  })
  @post("{id}")
  static createInw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
