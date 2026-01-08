import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnk")
export default class DnkController {
  @operation({
    summary: "Get Dnk",
  })
  @get()
  static getDnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnk",
  })
  @post("{id}")
  static createDnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
