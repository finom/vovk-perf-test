import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gav")
export default class GavController {
  @operation({
    summary: "Get Gav",
  })
  @get()
  static getGav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gav",
  })
  @post("{id}")
  static createGav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
