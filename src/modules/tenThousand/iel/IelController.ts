import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iel")
export default class IelController {
  @operation({
    summary: "Get Iel",
  })
  @get()
  static getIel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iel",
  })
  @post("{id}")
  static createIel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
