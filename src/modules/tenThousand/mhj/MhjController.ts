import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhj")
export default class MhjController {
  @operation({
    summary: "Get Mhj",
  })
  @get()
  static getMhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhj",
  })
  @post("{id}")
  static createMhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
