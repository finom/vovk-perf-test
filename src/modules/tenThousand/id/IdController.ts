import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("id")
export default class IdController {
  @operation({
    summary: "Get Id",
  })
  @get()
  static getId = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Id",
  })
  @post("{id}")
  static createId = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
