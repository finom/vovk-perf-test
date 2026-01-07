import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsj")
export default class GsjController {
  @operation({
    summary: "Get Gsj",
  })
  @get()
  static getGsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsj",
  })
  @post("{id}")
  static createGsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
