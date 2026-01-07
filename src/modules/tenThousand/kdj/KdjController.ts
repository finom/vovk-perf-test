import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdj")
export default class KdjController {
  @operation({
    summary: "Get Kdj",
  })
  @get()
  static getKdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdj",
  })
  @post("{id}")
  static createKdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
