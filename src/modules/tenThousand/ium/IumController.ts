import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iums")
export default class IumController {
  @operation({
    summary: "Get Iums",
  })
  @get()
  static getIums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ium",
  })
  @post("{id}")
  static createIum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
