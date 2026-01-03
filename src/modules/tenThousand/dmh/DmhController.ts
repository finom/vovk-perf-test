import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmhs")
export default class DmhController {
  @operation({
    summary: "Get Dmhs",
  })
  @get()
  static getDmhs = procedure({
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
