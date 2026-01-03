import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsqs")
export default class NsqController {
  @operation({
    summary: "Get Nsqs",
  })
  @get()
  static getNsqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsq",
  })
  @post("{id}")
  static createNsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
