import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mam")
export default class MamController {
  @operation({
    summary: "Get Mam",
  })
  @get()
  static getMam = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mam",
  })
  @post("{id}")
  static createMam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
