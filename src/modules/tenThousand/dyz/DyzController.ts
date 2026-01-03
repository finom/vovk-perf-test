import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyzs")
export default class DyzController {
  @operation({
    summary: "Get Dyzs",
  })
  @get()
  static getDyzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyz",
  })
  @post("{id}")
  static createDyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
