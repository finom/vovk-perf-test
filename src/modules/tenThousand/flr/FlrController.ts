import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flr")
export default class FlrController {
  @operation({
    summary: "Get Flr",
  })
  @get()
  static getFlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flr",
  })
  @post("{id}")
  static createFlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
