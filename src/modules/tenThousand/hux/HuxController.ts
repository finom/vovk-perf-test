import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hux")
export default class HuxController {
  @operation({
    summary: "Get Hux",
  })
  @get()
  static getHux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hux",
  })
  @post("{id}")
  static createHux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
