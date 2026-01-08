import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikx")
export default class IkxController {
  @operation({
    summary: "Get Ikx",
  })
  @get()
  static getIkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikx",
  })
  @post("{id}")
  static createIkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
