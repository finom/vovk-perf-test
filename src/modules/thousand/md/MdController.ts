import { procedure, prefix, get, post, operation } from "vovk";

@prefix("md")
export default class MdController {
  @operation({
    summary: "Get Md",
  })
  @get()
  static getMd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Md",
  })
  @post("{id}")
  static createMd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
