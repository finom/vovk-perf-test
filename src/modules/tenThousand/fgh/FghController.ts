import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgh")
export default class FghController {
  @operation({
    summary: "Get Fgh",
  })
  @get()
  static getFgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgh",
  })
  @post("{id}")
  static createFgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
