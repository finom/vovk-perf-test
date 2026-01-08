import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtu")
export default class DtuController {
  @operation({
    summary: "Get Dtu",
  })
  @get()
  static getDtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtu",
  })
  @post("{id}")
  static createDtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
