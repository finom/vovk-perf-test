import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivq")
export default class IvqController {
  @operation({
    summary: "Get Ivq",
  })
  @get()
  static getIvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivq",
  })
  @post("{id}")
  static createIvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
