import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nin")
export default class NinController {
  @operation({
    summary: "Get Nin",
  })
  @get()
  static getNin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nin",
  })
  @post("{id}")
  static createNin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
