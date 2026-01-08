import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aaq")
export default class AaqController {
  @operation({
    summary: "Get Aaq",
  })
  @get()
  static getAaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaq",
  })
  @post("{id}")
  static createAaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
