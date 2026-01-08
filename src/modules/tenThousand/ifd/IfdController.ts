import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifd")
export default class IfdController {
  @operation({
    summary: "Get Ifd",
  })
  @get()
  static getIfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifd",
  })
  @post("{id}")
  static createIfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
