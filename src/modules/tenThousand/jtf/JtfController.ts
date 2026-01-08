import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtf")
export default class JtfController {
  @operation({
    summary: "Get Jtf",
  })
  @get()
  static getJtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtf",
  })
  @post("{id}")
  static createJtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
