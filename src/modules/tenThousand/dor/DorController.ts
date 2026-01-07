import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dor")
export default class DorController {
  @operation({
    summary: "Get Dor",
  })
  @get()
  static getDor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dor",
  })
  @post("{id}")
  static createDor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
