import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ims")
export default class ImsController {
  @operation({
    summary: "Get Ims",
  })
  @get()
  static getIms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ims",
  })
  @post("{id}")
  static createIms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
