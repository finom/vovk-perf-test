import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rq")
export default class RqController {
  @operation({
    summary: "Get Rq",
  })
  @get()
  static getRq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rq",
  })
  @post("{id}")
  static createRq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
