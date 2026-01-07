import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idk")
export default class IdkController {
  @operation({
    summary: "Get Idk",
  })
  @get()
  static getIdk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idk",
  })
  @post("{id}")
  static createIdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
