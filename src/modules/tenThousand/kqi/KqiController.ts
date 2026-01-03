import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqis")
export default class KqiController {
  @operation({
    summary: "Get Kqis",
  })
  @get()
  static getKqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqi",
  })
  @post("{id}")
  static createKqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
