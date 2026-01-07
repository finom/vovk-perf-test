import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gie")
export default class GieController {
  @operation({
    summary: "Get Gie",
  })
  @get()
  static getGie = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gie",
  })
  @post("{id}")
  static createGie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
