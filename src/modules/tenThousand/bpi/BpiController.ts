import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpis")
export default class BpiController {
  @operation({
    summary: "Get Bpis",
  })
  @get()
  static getBpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpi",
  })
  @post("{id}")
  static createBpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
