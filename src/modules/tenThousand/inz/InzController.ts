import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inz")
export default class InzController {
  @operation({
    summary: "Get Inz",
  })
  @get()
  static getInz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inz",
  })
  @post("{id}")
  static createInz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
