import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkn")
export default class DknController {
  @operation({
    summary: "Get Dkn",
  })
  @get()
  static getDkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkn",
  })
  @post("{id}")
  static createDkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
