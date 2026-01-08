import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fd")
export default class FdController {
  @operation({
    summary: "Get Fd",
  })
  @get()
  static getFd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fd",
  })
  @post("{id}")
  static createFd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
