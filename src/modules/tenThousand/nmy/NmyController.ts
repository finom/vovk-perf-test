import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmies")
export default class NmyController {
  @operation({
    summary: "Get Nmies",
  })
  @get()
  static getNmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmy",
  })
  @post("{id}")
  static createNmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
