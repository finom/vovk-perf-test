import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awh")
export default class AwhController {
  @operation({
    summary: "Get Awh",
  })
  @get()
  static getAwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awh",
  })
  @post("{id}")
  static createAwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
