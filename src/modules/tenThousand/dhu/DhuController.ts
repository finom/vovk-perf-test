import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhu")
export default class DhuController {
  @operation({
    summary: "Get Dhu",
  })
  @get()
  static getDhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhu",
  })
  @post("{id}")
  static createDhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
