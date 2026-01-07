import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mut")
export default class MutController {
  @operation({
    summary: "Get Mut",
  })
  @get()
  static getMut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mut",
  })
  @post("{id}")
  static createMut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
