import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmq")
export default class KmqController {
  @operation({
    summary: "Get Kmq",
  })
  @get()
  static getKmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmq",
  })
  @post("{id}")
  static createKmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
