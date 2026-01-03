import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdcs")
export default class FdcController {
  @operation({
    summary: "Get Fdcs",
  })
  @get()
  static getFdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdc",
  })
  @post("{id}")
  static createFdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
