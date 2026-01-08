import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ief")
export default class IefController {
  @operation({
    summary: "Get Ief",
  })
  @get()
  static getIef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ief",
  })
  @post("{id}")
  static createIef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
