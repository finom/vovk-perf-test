import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddj")
export default class DdjController {
  @operation({
    summary: "Get Ddj",
  })
  @get()
  static getDdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddj",
  })
  @post("{id}")
  static createDdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
