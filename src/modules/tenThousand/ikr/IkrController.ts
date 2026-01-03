import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikrs")
export default class IkrController {
  @operation({
    summary: "Get Ikrs",
  })
  @get()
  static getIkrs = procedure({
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
