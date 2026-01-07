import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbi")
export default class FbiController {
  @operation({
    summary: "Get Fbi",
  })
  @get()
  static getFbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbi",
  })
  @post("{id}")
  static createFbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
