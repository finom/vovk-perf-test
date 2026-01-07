import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuz")
export default class KuzController {
  @operation({
    summary: "Get Kuz",
  })
  @get()
  static getKuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuz",
  })
  @post("{id}")
  static createKuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
