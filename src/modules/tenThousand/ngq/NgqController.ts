import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngq")
export default class NgqController {
  @operation({
    summary: "Get Ngq",
  })
  @get()
  static getNgq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngq",
  })
  @post("{id}")
  static createNgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
