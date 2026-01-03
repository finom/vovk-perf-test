import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjes")
export default class BjeController {
  @operation({
    summary: "Get Bjes",
  })
  @get()
  static getBjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bje",
  })
  @post("{id}")
  static createBje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
