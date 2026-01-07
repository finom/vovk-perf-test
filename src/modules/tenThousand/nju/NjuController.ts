import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nju")
export default class NjuController {
  @operation({
    summary: "Get Nju",
  })
  @get()
  static getNju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nju",
  })
  @post("{id}")
  static createNju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
