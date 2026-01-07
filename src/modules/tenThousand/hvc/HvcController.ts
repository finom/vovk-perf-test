import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvc")
export default class HvcController {
  @operation({
    summary: "Get Hvc",
  })
  @get()
  static getHvc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvc",
  })
  @post("{id}")
  static createHvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
