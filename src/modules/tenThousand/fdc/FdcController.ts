import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdc")
export default class FdcController {
  @operation({
    summary: "Get Fdc",
  })
  @get()
  static getFdc = procedure({
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
