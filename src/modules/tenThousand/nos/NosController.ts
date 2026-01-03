import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nos")
export default class NosController {
  @operation({
    summary: "Get Nos",
  })
  @get()
  static getNos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nos",
  })
  @post("{id}")
  static createNos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
