import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muu")
export default class MuuController {
  @operation({
    summary: "Get Muu",
  })
  @get()
  static getMuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muu",
  })
  @post("{id}")
  static createMuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
