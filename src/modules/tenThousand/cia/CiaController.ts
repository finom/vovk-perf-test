import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cia")
export default class CiaController {
  @operation({
    summary: "Get Cia",
  })
  @get()
  static getCia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cia",
  })
  @post("{id}")
  static createCia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
