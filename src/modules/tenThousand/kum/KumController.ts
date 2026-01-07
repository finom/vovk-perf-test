import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kum")
export default class KumController {
  @operation({
    summary: "Get Kum",
  })
  @get()
  static getKum = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kum",
  })
  @post("{id}")
  static createKum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
