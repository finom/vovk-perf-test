import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgd")
export default class DgdController {
  @operation({
    summary: "Get Dgd",
  })
  @get()
  static getDgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgd",
  })
  @post("{id}")
  static createDgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
