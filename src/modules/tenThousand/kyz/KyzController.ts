import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyz")
export default class KyzController {
  @operation({
    summary: "Get Kyz",
  })
  @get()
  static getKyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyz",
  })
  @post("{id}")
  static createKyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
