import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hii")
export default class HiiController {
  @operation({
    summary: "Get Hii",
  })
  @get()
  static getHii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hii",
  })
  @post("{id}")
  static createHii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
