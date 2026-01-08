import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmq")
export default class NmqController {
  @operation({
    summary: "Get Nmq",
  })
  @get()
  static getNmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmq",
  })
  @post("{id}")
  static createNmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
