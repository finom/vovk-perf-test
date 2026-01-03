import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbs")
export default class MbController {
  @operation({
    summary: "Get Mbs",
  })
  @get()
  static getMbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mb",
  })
  @post("{id}")
  static createMb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
