import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("maz")
export default class MazController {
  @operation({
    summary: "Get Maz",
  })
  @get()
  static getMaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maz",
  })
  @post("{id}")
  static createMaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
