import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jp")
export default class JpController {
  @operation({
    summary: "Get Jp",
  })
  @get()
  static getJp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jp",
  })
  @post("{id}")
  static createJp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
