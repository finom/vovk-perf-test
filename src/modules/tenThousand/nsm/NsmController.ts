import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsm")
export default class NsmController {
  @operation({
    summary: "Get Nsm",
  })
  @get()
  static getNsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsm",
  })
  @post("{id}")
  static createNsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
