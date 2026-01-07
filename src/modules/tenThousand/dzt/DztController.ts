import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzt")
export default class DztController {
  @operation({
    summary: "Get Dzt",
  })
  @get()
  static getDzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzt",
  })
  @post("{id}")
  static createDzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
