import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efzs")
export default class EfzController {
  @operation({
    summary: "Get Efzs",
  })
  @get()
  static getEfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efz",
  })
  @post("{id}")
  static createEfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
