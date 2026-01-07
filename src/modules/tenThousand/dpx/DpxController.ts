import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpx")
export default class DpxController {
  @operation({
    summary: "Get Dpx",
  })
  @get()
  static getDpx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpx",
  })
  @post("{id}")
  static createDpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
