import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpc")
export default class DpcController {
  @operation({
    summary: "Get Dpc",
  })
  @get()
  static getDpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpc",
  })
  @post("{id}")
  static createDpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
