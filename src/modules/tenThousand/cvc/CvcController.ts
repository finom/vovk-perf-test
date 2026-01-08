import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvc")
export default class CvcController {
  @operation({
    summary: "Get Cvc",
  })
  @get()
  static getCvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvc",
  })
  @post("{id}")
  static createCvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
