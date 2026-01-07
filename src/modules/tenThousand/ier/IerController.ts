import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ier")
export default class IerController {
  @operation({
    summary: "Get Ier",
  })
  @get()
  static getIer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ier",
  })
  @post("{id}")
  static createIer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
