import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqes")
export default class GqeController {
  @operation({
    summary: "Get Gqes",
  })
  @get()
  static getGqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqe",
  })
  @post("{id}")
  static createGqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
