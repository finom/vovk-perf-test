import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqcs")
export default class KqcController {
  @operation({
    summary: "Get Kqcs",
  })
  @get()
  static getKqcs = procedure({
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
