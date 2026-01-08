import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egu")
export default class EguController {
  @operation({
    summary: "Get Egu",
  })
  @get()
  static getEgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egu",
  })
  @post("{id}")
  static createEgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
