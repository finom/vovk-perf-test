import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pcs")
export default class PcController {
  @operation({
    summary: "Get Pcs",
  })
  @get()
  static getPcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pc",
  })
  @post("{id}")
  static createPc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
