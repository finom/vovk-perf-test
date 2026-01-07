import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btt")
export default class BttController {
  @operation({
    summary: "Get Btt",
  })
  @get()
  static getBtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btt",
  })
  @post("{id}")
  static createBtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
