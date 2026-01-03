import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwrs")
export default class FwrController {
  @operation({
    summary: "Get Fwrs",
  })
  @get()
  static getFwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwr",
  })
  @post("{id}")
  static createFwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
