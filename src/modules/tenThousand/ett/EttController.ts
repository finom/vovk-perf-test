import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ett")
export default class EttController {
  @operation({
    summary: "Get Ett",
  })
  @get()
  static getEtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ett",
  })
  @post("{id}")
  static createEtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
