import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktt")
export default class KttController {
  @operation({
    summary: "Get Ktt",
  })
  @get()
  static getKtt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktt",
  })
  @post("{id}")
  static createKtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
