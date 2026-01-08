import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbd")
export default class CbdController {
  @operation({
    summary: "Get Cbd",
  })
  @get()
  static getCbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbd",
  })
  @post("{id}")
  static createCbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
