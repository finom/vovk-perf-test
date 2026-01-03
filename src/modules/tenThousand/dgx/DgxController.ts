import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgxes")
export default class DgxController {
  @operation({
    summary: "Get Dgxes",
  })
  @get()
  static getDgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgx",
  })
  @post("{id}")
  static createDgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
