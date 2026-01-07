import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edu")
export default class EduController {
  @operation({
    summary: "Get Edu",
  })
  @get()
  static getEdu = procedure({
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
