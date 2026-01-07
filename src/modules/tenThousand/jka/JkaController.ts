import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jka")
export default class JkaController {
  @operation({
    summary: "Get Jka",
  })
  @get()
  static getJka = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jka",
  })
  @post("{id}")
  static createJka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
