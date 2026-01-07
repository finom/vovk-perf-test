import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsf")
export default class NsfController {
  @operation({
    summary: "Get Nsf",
  })
  @get()
  static getNsf = procedure({
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
