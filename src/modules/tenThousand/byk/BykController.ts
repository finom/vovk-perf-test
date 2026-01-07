import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byk")
export default class BykController {
  @operation({
    summary: "Get Byk",
  })
  @get()
  static getByk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byk",
  })
  @post("{id}")
  static createByk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
