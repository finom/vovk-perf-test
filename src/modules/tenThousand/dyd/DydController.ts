import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyd")
export default class DydController {
  @operation({
    summary: "Get Dyd",
  })
  @get()
  static getDyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyd",
  })
  @post("{id}")
  static createDyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
