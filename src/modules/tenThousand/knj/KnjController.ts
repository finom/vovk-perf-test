import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knj")
export default class KnjController {
  @operation({
    summary: "Get Knj",
  })
  @get()
  static getKnj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knj",
  })
  @post("{id}")
  static createKnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
