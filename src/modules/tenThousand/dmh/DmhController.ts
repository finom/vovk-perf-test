import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmh")
export default class DmhController {
  @operation({
    summary: "Get Dmh",
  })
  @get()
  static getDmh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmh",
  })
  @post("{id}")
  static createDmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
