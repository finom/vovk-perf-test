import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncd")
export default class NcdController {
  @operation({
    summary: "Get Ncd",
  })
  @get()
  static getNcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncd",
  })
  @post("{id}")
  static createNcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
