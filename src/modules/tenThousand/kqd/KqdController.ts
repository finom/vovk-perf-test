import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqds")
export default class KqdController {
  @operation({
    summary: "Get Kqds",
  })
  @get()
  static getKqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqd",
  })
  @post("{id}")
  static createKqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
