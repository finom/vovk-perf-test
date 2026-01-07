import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fci")
export default class FciController {
  @operation({
    summary: "Get Fci",
  })
  @get()
  static getFci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fci",
  })
  @post("{id}")
  static createFci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
