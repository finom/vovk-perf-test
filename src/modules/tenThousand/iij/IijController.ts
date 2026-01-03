import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iijs")
export default class IijController {
  @operation({
    summary: "Get Iijs",
  })
  @get()
  static getIijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iij",
  })
  @post("{id}")
  static createIij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
