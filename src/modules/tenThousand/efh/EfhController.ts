import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efh")
export default class EfhController {
  @operation({
    summary: "Get Efh",
  })
  @get()
  static getEfh = procedure({
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
