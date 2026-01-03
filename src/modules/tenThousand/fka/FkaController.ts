import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkas")
export default class FkaController {
  @operation({
    summary: "Get Fkas",
  })
  @get()
  static getFkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fka",
  })
  @post("{id}")
  static createFka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
