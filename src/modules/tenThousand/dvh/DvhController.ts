import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvh")
export default class DvhController {
  @operation({
    summary: "Get Dvh",
  })
  @get()
  static getDvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvh",
  })
  @post("{id}")
  static createDvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
