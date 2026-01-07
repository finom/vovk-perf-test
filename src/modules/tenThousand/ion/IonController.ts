import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ion")
export default class IonController {
  @operation({
    summary: "Get Ion",
  })
  @get()
  static getIon = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ion",
  })
  @post("{id}")
  static createIon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
