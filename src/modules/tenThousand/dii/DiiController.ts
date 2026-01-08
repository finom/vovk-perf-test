import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dii")
export default class DiiController {
  @operation({
    summary: "Get Dii",
  })
  @get()
  static getDii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dii",
  })
  @post("{id}")
  static createDii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
