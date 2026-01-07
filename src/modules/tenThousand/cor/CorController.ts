import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cor")
export default class CorController {
  @operation({
    summary: "Get Cor",
  })
  @get()
  static getCor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cor",
  })
  @post("{id}")
  static createCor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
