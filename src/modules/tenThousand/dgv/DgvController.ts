import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgvs")
export default class DgvController {
  @operation({
    summary: "Get Dgvs",
  })
  @get()
  static getDgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgv",
  })
  @post("{id}")
  static createDgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
