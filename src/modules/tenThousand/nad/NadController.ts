import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nad")
export default class NadController {
  @operation({
    summary: "Get Nad",
  })
  @get()
  static getNad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nad",
  })
  @post("{id}")
  static createNad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
