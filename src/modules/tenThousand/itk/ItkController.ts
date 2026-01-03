import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itks")
export default class ItkController {
  @operation({
    summary: "Get Itks",
  })
  @get()
  static getItks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itk",
  })
  @post("{id}")
  static createItk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
