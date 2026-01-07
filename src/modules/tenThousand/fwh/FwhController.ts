import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwh")
export default class FwhController {
  @operation({
    summary: "Get Fwh",
  })
  @get()
  static getFwh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwh",
  })
  @post("{id}")
  static createFwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
