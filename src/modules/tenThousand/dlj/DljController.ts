import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlj")
export default class DljController {
  @operation({
    summary: "Get Dlj",
  })
  @get()
  static getDlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dlj",
  })
  @post("{id}")
  static createDlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
