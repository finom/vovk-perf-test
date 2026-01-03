import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaqs")
export default class JaqController {
  @operation({
    summary: "Get Jaqs",
  })
  @get()
  static getJaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaq",
  })
  @post("{id}")
  static createJaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
