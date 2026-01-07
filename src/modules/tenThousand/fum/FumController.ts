import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fum")
export default class FumController {
  @operation({
    summary: "Get Fum",
  })
  @get()
  static getFum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fum",
  })
  @post("{id}")
  static createFum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
