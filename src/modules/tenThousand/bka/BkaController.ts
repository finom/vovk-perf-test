import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkas")
export default class BkaController {
  @operation({
    summary: "Get Bkas",
  })
  @get()
  static getBkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bka",
  })
  @post("{id}")
  static createBka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
