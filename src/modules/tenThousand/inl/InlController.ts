import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inls")
export default class InlController {
  @operation({
    summary: "Get Inls",
  })
  @get()
  static getInls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inl",
  })
  @post("{id}")
  static createInl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
