import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kev")
export default class KevController {
  @operation({
    summary: "Get Kev",
  })
  @get()
  static getKev = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kev",
  })
  @post("{id}")
  static createKev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
