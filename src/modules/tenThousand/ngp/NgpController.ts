import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngp")
export default class NgpController {
  @operation({
    summary: "Get Ngp",
  })
  @get()
  static getNgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngp",
  })
  @post("{id}")
  static createNgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
