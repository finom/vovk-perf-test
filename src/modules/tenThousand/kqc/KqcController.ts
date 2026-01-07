import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqc")
export default class KqcController {
  @operation({
    summary: "Get Kqc",
  })
  @get()
  static getKqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqc",
  })
  @post("{id}")
  static createKqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
