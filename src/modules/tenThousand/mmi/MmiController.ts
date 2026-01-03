import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmis")
export default class MmiController {
  @operation({
    summary: "Get Mmis",
  })
  @get()
  static getMmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmi",
  })
  @post("{id}")
  static createMmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
