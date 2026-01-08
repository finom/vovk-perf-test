import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhn")
export default class BhnController {
  @operation({
    summary: "Get Bhn",
  })
  @get()
  static getBhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhn",
  })
  @post("{id}")
  static createBhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
