import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mues")
export default class MueController {
  @operation({
    summary: "Get Mues",
  })
  @get()
  static getMues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mue",
  })
  @post("{id}")
  static createMue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
