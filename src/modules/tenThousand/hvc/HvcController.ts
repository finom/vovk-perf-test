import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvcs")
export default class HvcController {
  @operation({
    summary: "Get Hvcs",
  })
  @get()
  static getHvcs = procedure({
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
