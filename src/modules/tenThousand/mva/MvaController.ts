import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mva")
export default class MvaController {
  @operation({
    summary: "Get Mva",
  })
  @get()
  static getMva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mva",
  })
  @post("{id}")
  static createMva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
