import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ien")
export default class IenController {
  @operation({
    summary: "Get Ien",
  })
  @get()
  static getIen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ien",
  })
  @post("{id}")
  static createIen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
