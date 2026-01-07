import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgu")
export default class MguController {
  @operation({
    summary: "Get Mgu",
  })
  @get()
  static getMgu = procedure({
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
