import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddq")
export default class DdqController {
  @operation({
    summary: "Get Ddq",
  })
  @get()
  static getDdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddq",
  })
  @post("{id}")
  static createDdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
