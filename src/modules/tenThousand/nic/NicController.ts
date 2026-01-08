import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nic")
export default class NicController {
  @operation({
    summary: "Get Nic",
  })
  @get()
  static getNic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nic",
  })
  @post("{id}")
  static createNic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
