import { procedure, prefix, get, post, operation } from "vovk";

@prefix("de")
export default class DeController {
  @operation({
    summary: "Get De",
  })
  @get()
  static getDe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create De",
  })
  @post("{id}")
  static createDe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
