import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkas")
export default class DkaController {
  @operation({
    summary: "Get Dkas",
  })
  @get()
  static getDkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dka",
  })
  @post("{id}")
  static createDka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
