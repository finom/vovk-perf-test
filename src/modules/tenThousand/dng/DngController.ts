import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dng")
export default class DngController {
  @operation({
    summary: "Get Dng",
  })
  @get()
  static getDng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dng",
  })
  @post("{id}")
  static createDng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
