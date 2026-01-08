import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dis")
export default class DisController {
  @operation({
    summary: "Get Dis",
  })
  @get()
  static getDis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dis",
  })
  @post("{id}")
  static createDis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
