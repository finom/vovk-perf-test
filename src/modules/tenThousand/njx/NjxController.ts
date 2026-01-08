import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njx")
export default class NjxController {
  @operation({
    summary: "Get Njx",
  })
  @get()
  static getNjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njx",
  })
  @post("{id}")
  static createNjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
