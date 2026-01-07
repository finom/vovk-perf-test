import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ker")
export default class KerController {
  @operation({
    summary: "Get Ker",
  })
  @get()
  static getKer = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ker",
  })
  @post("{id}")
  static createKer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
