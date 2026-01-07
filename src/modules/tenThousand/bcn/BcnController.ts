import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcn")
export default class BcnController {
  @operation({
    summary: "Get Bcn",
  })
  @get()
  static getBcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcn",
  })
  @post("{id}")
  static createBcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
