import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dk")
export default class DkController {
  @operation({
    summary: "Get Dk",
  })
  @get()
  static getDk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dk",
  })
  @post("{id}")
  static createDk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
