import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzc")
export default class BzcController {
  @operation({
    summary: "Get Bzc",
  })
  @get()
  static getBzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzc",
  })
  @post("{id}")
  static createBzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
