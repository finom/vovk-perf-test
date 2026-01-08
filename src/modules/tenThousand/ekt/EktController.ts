import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekt")
export default class EktController {
  @operation({
    summary: "Get Ekt",
  })
  @get()
  static getEkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekt",
  })
  @post("{id}")
  static createEkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
