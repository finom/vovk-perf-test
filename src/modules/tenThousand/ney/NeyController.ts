import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ney")
export default class NeyController {
  @operation({
    summary: "Get Ney",
  })
  @get()
  static getNey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ney",
  })
  @post("{id}")
  static createNey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
