import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klt")
export default class KltController {
  @operation({
    summary: "Get Klt",
  })
  @get()
  static getKlt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Klt",
  })
  @post("{id}")
  static createKlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
