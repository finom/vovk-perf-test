import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hie")
export default class HieController {
  @operation({
    summary: "Get Hie",
  })
  @get()
  static getHie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hie",
  })
  @post("{id}")
  static createHie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
