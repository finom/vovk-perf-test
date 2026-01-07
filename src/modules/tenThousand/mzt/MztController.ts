import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzt")
export default class MztController {
  @operation({
    summary: "Get Mzt",
  })
  @get()
  static getMzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzt",
  })
  @post("{id}")
  static createMzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
