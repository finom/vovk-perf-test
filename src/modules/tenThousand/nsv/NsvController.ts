import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsv")
export default class NsvController {
  @operation({
    summary: "Get Nsv",
  })
  @get()
  static getNsv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsv",
  })
  @post("{id}")
  static createNsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
