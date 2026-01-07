import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mh")
export default class MhController {
  @operation({
    summary: "Get Mh",
  })
  @get()
  static getMh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mh",
  })
  @post("{id}")
  static createMh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
