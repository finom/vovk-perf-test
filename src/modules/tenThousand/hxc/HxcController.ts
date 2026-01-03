import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxcs")
export default class HxcController {
  @operation({
    summary: "Get Hxcs",
  })
  @get()
  static getHxcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxc",
  })
  @post("{id}")
  static createHxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
