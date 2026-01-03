import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqies")
export default class KqyController {
  @operation({
    summary: "Get Kqies",
  })
  @get()
  static getKqies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqy",
  })
  @post("{id}")
  static createKqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
