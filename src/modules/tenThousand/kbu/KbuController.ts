import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbu")
export default class KbuController {
  @operation({
    summary: "Get Kbu",
  })
  @get()
  static getKbu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbu",
  })
  @post("{id}")
  static createKbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
