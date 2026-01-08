import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqp")
export default class AqpController {
  @operation({
    summary: "Get Aqp",
  })
  @get()
  static getAqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqp",
  })
  @post("{id}")
  static createAqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
