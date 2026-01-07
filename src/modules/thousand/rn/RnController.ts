import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rn")
export default class RnController {
  @operation({
    summary: "Get Rn",
  })
  @get()
  static getRn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rn",
  })
  @post("{id}")
  static createRn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
