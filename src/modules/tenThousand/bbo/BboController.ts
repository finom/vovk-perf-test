import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbo")
export default class BboController {
  @operation({
    summary: "Get Bbo",
  })
  @get()
  static getBbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbo",
  })
  @post("{id}")
  static createBbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
