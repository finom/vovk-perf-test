import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmy")
export default class DmyController {
  @operation({
    summary: "Get Dmy",
  })
  @get()
  static getDmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmy",
  })
  @post("{id}")
  static createDmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
