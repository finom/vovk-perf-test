import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayl")
export default class AylController {
  @operation({
    summary: "Get Ayl",
  })
  @get()
  static getAyl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayl",
  })
  @post("{id}")
  static createAyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
