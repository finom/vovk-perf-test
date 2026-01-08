import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmk")
export default class KmkController {
  @operation({
    summary: "Get Kmk",
  })
  @get()
  static getKmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmk",
  })
  @post("{id}")
  static createKmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
