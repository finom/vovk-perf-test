import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krt")
export default class KrtController {
  @operation({
    summary: "Get Krt",
  })
  @get()
  static getKrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krt",
  })
  @post("{id}")
  static createKrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
