import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngn")
export default class NgnController {
  @operation({
    summary: "Get Ngn",
  })
  @get()
  static getNgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngn",
  })
  @post("{id}")
  static createNgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
