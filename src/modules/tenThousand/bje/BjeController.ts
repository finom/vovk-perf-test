import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bje")
export default class BjeController {
  @operation({
    summary: "Get Bje",
  })
  @get()
  static getBje = procedure({
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
