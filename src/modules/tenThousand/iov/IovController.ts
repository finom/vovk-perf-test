import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iov")
export default class IovController {
  @operation({
    summary: "Get Iov",
  })
  @get()
  static getIov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iov",
  })
  @post("{id}")
  static createIov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
