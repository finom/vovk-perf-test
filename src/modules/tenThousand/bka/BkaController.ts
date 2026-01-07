import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bka")
export default class BkaController {
  @operation({
    summary: "Get Bka",
  })
  @get()
  static getBka = procedure({
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
