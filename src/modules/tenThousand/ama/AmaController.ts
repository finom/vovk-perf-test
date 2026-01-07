import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ama")
export default class AmaController {
  @operation({
    summary: "Get Ama",
  })
  @get()
  static getAma = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ama",
  })
  @post("{id}")
  static createAma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
