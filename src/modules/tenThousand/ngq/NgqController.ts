import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngqs")
export default class NgqController {
  @operation({
    summary: "Get Ngqs",
  })
  @get()
  static getNgqs = procedure({
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
