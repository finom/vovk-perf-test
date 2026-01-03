import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efhs")
export default class EfhController {
  @operation({
    summary: "Get Efhs",
  })
  @get()
  static getEfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efh",
  })
  @post("{id}")
  static createEfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
