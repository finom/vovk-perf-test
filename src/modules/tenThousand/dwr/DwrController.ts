import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwr")
export default class DwrController {
  @operation({
    summary: "Get Dwr",
  })
  @get()
  static getDwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwr",
  })
  @post("{id}")
  static createDwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
