import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dci")
export default class DciController {
  @operation({
    summary: "Get Dci",
  })
  @get()
  static getDci = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dci",
  })
  @post("{id}")
  static createDci = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
