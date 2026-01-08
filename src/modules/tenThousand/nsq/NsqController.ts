import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsq")
export default class NsqController {
  @operation({
    summary: "Get Nsq",
  })
  @get()
  static getNsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsq",
  })
  @post("{id}")
  static createNsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
