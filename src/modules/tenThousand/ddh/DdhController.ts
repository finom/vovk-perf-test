import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddh")
export default class DdhController {
  @operation({
    summary: "Get Ddh",
  })
  @get()
  static getDdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddh",
  })
  @post("{id}")
  static createDdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
