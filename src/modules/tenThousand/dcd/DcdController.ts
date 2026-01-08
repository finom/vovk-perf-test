import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcd")
export default class DcdController {
  @operation({
    summary: "Get Dcd",
  })
  @get()
  static getDcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcd",
  })
  @post("{id}")
  static createDcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
