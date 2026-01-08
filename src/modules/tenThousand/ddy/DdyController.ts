import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddy")
export default class DdyController {
  @operation({
    summary: "Get Ddy",
  })
  @get()
  static getDdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddy",
  })
  @post("{id}")
  static createDdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
