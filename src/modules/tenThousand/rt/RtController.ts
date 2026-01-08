import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rt")
export default class RtController {
  @operation({
    summary: "Get Rt",
  })
  @get()
  static getRt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rt",
  })
  @post("{id}")
  static createRt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
