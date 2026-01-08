import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("des")
export default class DesController {
  @operation({
    summary: "Get Des",
  })
  @get()
  static getDes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Des",
  })
  @post("{id}")
  static createDes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
