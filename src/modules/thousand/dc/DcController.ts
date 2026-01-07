import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dc")
export default class DcController {
  @operation({
    summary: "Get Dc",
  })
  @get()
  static getDc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dc",
  })
  @post("{id}")
  static createDc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
