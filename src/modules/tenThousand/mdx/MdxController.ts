import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdx")
export default class MdxController {
  @operation({
    summary: "Get Mdx",
  })
  @get()
  static getMdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdx",
  })
  @post("{id}")
  static createMdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
