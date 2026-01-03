import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxcs")
export default class GxcController {
  @operation({
    summary: "Get Gxcs",
  })
  @get()
  static getGxcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxc",
  })
  @post("{id}")
  static createGxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
