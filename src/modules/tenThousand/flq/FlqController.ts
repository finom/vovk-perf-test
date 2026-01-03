import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flqs")
export default class FlqController {
  @operation({
    summary: "Get Flqs",
  })
  @get()
  static getFlqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flq",
  })
  @post("{id}")
  static createFlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
