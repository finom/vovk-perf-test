import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyd")
export default class KydController {
  @operation({
    summary: "Get Kyd",
  })
  @get()
  static getKyd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyd",
  })
  @post("{id}")
  static createKyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
