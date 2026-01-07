import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dob")
export default class DobController {
  @operation({
    summary: "Get Dob",
  })
  @get()
  static getDob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dob",
  })
  @post("{id}")
  static createDob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
