import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikr")
export default class IkrController {
  @operation({
    summary: "Get Ikr",
  })
  @get()
  static getIkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikr",
  })
  @post("{id}")
  static createIkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
