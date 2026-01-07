import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftt")
export default class FttController {
  @operation({
    summary: "Get Ftt",
  })
  @get()
  static getFtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftt",
  })
  @post("{id}")
  static createFtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
