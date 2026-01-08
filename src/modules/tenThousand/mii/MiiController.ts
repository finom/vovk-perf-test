import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mii")
export default class MiiController {
  @operation({
    summary: "Get Mii",
  })
  @get()
  static getMii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mii",
  })
  @post("{id}")
  static createMii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
