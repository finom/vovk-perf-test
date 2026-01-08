import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmq")
export default class GmqController {
  @operation({
    summary: "Get Gmq",
  })
  @get()
  static getGmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmq",
  })
  @post("{id}")
  static createGmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
