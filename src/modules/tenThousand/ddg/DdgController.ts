import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddg")
export default class DdgController {
  @operation({
    summary: "Get Ddg",
  })
  @get()
  static getDdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddg",
  })
  @post("{id}")
  static createDdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
