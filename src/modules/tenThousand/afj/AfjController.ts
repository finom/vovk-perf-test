import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afj")
export default class AfjController {
  @operation({
    summary: "Get Afj",
  })
  @get()
  static getAfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afj",
  })
  @post("{id}")
  static createAfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
