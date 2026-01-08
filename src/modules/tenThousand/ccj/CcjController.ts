import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccj")
export default class CcjController {
  @operation({
    summary: "Get Ccj",
  })
  @get()
  static getCcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccj",
  })
  @post("{id}")
  static createCcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
