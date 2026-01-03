import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsfs")
export default class NsfController {
  @operation({
    summary: "Get Nsfs",
  })
  @get()
  static getNsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsf",
  })
  @post("{id}")
  static createNsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
