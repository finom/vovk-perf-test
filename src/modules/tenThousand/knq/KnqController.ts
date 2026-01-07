import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knq")
export default class KnqController {
  @operation({
    summary: "Get Knq",
  })
  @get()
  static getKnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knq",
  })
  @post("{id}")
  static createKnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
