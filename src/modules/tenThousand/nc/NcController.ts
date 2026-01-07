import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nc")
export default class NcController {
  @operation({
    summary: "Get Nc",
  })
  @get()
  static getNc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nc",
  })
  @post("{id}")
  static createNc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
