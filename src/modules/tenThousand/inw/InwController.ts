import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inw")
export default class InwController {
  @operation({
    summary: "Get Inw",
  })
  @get()
  static getInw = procedure({
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
