import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abhs")
export default class AbhController {
  @operation({
    summary: "Get Abhs",
  })
  @get()
  static getAbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abh",
  })
  @post("{id}")
  static createAbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
