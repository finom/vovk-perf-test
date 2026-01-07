import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knw")
export default class KnwController {
  @operation({
    summary: "Get Knw",
  })
  @get()
  static getKnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knw",
  })
  @post("{id}")
  static createKnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
