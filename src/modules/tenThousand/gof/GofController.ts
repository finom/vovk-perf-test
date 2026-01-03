import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gofs")
export default class GofController {
  @operation({
    summary: "Get Gofs",
  })
  @get()
  static getGofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gof",
  })
  @post("{id}")
  static createGof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
