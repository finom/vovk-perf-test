import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgus")
export default class MguController {
  @operation({
    summary: "Get Mgus",
  })
  @get()
  static getMgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgu",
  })
  @post("{id}")
  static createMgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
