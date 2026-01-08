import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aii")
export default class AiiController {
  @operation({
    summary: "Get Aii",
  })
  @get()
  static getAii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aii",
  })
  @post("{id}")
  static createAii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
