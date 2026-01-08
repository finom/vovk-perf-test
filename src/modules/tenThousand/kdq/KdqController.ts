import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdq")
export default class KdqController {
  @operation({
    summary: "Get Kdq",
  })
  @get()
  static getKdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdq",
  })
  @post("{id}")
  static createKdq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
