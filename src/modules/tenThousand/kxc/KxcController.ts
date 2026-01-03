import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxcs")
export default class KxcController {
  @operation({
    summary: "Get Kxcs",
  })
  @get()
  static getKxcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxc",
  })
  @post("{id}")
  static createKxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
