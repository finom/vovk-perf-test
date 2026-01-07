import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kig")
export default class KigController {
  @operation({
    summary: "Get Kig",
  })
  @get()
  static getKig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kig",
  })
  @post("{id}")
  static createKig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
