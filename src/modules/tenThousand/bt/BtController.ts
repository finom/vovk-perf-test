import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bt")
export default class BtController {
  @operation({
    summary: "Get Bt",
  })
  @get()
  static getBt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bt",
  })
  @post("{id}")
  static createBt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
