import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eno")
export default class EnoController {
  @operation({
    summary: "Get Eno",
  })
  @get()
  static getEno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eno",
  })
  @post("{id}")
  static createEno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
