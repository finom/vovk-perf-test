import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzg")
export default class MzgController {
  @operation({
    summary: "Get Mzg",
  })
  @get()
  static getMzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzg",
  })
  @post("{id}")
  static createMzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
