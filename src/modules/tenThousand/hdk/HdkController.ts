import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdk")
export default class HdkController {
  @operation({
    summary: "Get Hdk",
  })
  @get()
  static getHdk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdk",
  })
  @post("{id}")
  static createHdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
