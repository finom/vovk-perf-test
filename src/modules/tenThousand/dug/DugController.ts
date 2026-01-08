import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dug")
export default class DugController {
  @operation({
    summary: "Get Dug",
  })
  @get()
  static getDug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dug",
  })
  @post("{id}")
  static createDug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
