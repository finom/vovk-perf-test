import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbo")
export default class HboController {
  @operation({
    summary: "Get Hbo",
  })
  @get()
  static getHbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbo",
  })
  @post("{id}")
  static createHbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
