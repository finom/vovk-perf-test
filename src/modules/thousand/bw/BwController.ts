import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bw")
export default class BwController {
  @operation({
    summary: "Get Bw",
  })
  @get()
  static getBw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bw",
  })
  @post("{id}")
  static createBw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
