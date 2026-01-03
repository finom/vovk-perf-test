import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edus")
export default class EduController {
  @operation({
    summary: "Get Edus",
  })
  @get()
  static getEdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edu",
  })
  @post("{id}")
  static createEdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
