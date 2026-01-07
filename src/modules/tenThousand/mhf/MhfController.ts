import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhf")
export default class MhfController {
  @operation({
    summary: "Get Mhf",
  })
  @get()
  static getMhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhf",
  })
  @post("{id}")
  static createMhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
