import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("io")
export default class IoController {
  @operation({
    summary: "Get Io",
  })
  @get()
  static getIo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Io",
  })
  @post("{id}")
  static createIo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
