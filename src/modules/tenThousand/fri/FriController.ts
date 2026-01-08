import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fri")
export default class FriController {
  @operation({
    summary: "Get Fri",
  })
  @get()
  static getFri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fri",
  })
  @post("{id}")
  static createFri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
