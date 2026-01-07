import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixc")
export default class IxcController {
  @operation({
    summary: "Get Ixc",
  })
  @get()
  static getIxc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixc",
  })
  @post("{id}")
  static createIxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
