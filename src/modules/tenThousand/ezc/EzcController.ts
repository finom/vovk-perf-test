import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezcs")
export default class EzcController {
  @operation({
    summary: "Get Ezcs",
  })
  @get()
  static getEzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezc",
  })
  @post("{id}")
  static createEzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
