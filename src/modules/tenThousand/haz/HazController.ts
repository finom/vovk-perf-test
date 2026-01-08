import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("haz")
export default class HazController {
  @operation({
    summary: "Get Haz",
  })
  @get()
  static getHaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haz",
  })
  @post("{id}")
  static createHaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
