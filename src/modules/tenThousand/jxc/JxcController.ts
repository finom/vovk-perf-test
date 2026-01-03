import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxcs")
export default class JxcController {
  @operation({
    summary: "Get Jxcs",
  })
  @get()
  static getJxcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxc",
  })
  @post("{id}")
  static createJxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
