import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnx")
export default class BnxController {
  @operation({
    summary: "Get Bnx",
  })
  @get()
  static getBnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnx",
  })
  @post("{id}")
  static createBnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
