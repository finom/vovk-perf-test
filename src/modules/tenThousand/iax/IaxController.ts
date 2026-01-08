import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iax")
export default class IaxController {
  @operation({
    summary: "Get Iax",
  })
  @get()
  static getIax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iax",
  })
  @post("{id}")
  static createIax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
