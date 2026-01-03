import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzzes")
export default class BzzController {
  @operation({
    summary: "Get Bzzes",
  })
  @get()
  static getBzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzz",
  })
  @post("{id}")
  static createBzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
