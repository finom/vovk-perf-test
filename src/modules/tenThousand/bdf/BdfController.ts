import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdf")
export default class BdfController {
  @operation({
    summary: "Get Bdf",
  })
  @get()
  static getBdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdf",
  })
  @post("{id}")
  static createBdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
