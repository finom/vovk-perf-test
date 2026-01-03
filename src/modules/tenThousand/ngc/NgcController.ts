import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngcs")
export default class NgcController {
  @operation({
    summary: "Get Ngcs",
  })
  @get()
  static getNgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngc",
  })
  @post("{id}")
  static createNgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
