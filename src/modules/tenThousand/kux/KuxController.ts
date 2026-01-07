import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kux")
export default class KuxController {
  @operation({
    summary: "Get Kux",
  })
  @get()
  static getKux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kux",
  })
  @post("{id}")
  static createKux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
