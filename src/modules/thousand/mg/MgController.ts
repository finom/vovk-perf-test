import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mg")
export default class MgController {
  @operation({
    summary: "Get Mg",
  })
  @get()
  static getMg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mg",
  })
  @post("{id}")
  static createMg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
