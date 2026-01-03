import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nihs")
export default class NihController {
  @operation({
    summary: "Get Nihs",
  })
  @get()
  static getNihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nih",
  })
  @post("{id}")
  static createNih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
