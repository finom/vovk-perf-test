import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlz")
export default class DlzController {
  @operation({
    summary: "Get Dlz",
  })
  @get()
  static getDlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlz",
  })
  @post("{id}")
  static createDlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
