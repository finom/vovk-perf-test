import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myas")
export default class MyaController {
  @operation({
    summary: "Get Myas",
  })
  @get()
  static getMyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mya",
  })
  @post("{id}")
  static createMya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
