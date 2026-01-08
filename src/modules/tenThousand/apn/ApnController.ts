import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apn")
export default class ApnController {
  @operation({
    summary: "Get Apn",
  })
  @get()
  static getApn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apn",
  })
  @post("{id}")
  static createApn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
