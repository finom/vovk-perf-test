import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("err")
export default class ErrController {
  @operation({
    summary: "Get Err",
  })
  @get()
  static getErr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Err",
  })
  @post("{id}")
  static createErr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
