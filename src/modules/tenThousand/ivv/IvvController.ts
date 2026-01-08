import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivv")
export default class IvvController {
  @operation({
    summary: "Get Ivv",
  })
  @get()
  static getIvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivv",
  })
  @post("{id}")
  static createIvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
