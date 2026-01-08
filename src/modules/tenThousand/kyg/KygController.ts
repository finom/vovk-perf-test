import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyg")
export default class KygController {
  @operation({
    summary: "Get Kyg",
  })
  @get()
  static getKyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyg",
  })
  @post("{id}")
  static createKyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
