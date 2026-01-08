import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kd")
export default class KdController {
  @operation({
    summary: "Get Kd",
  })
  @get()
  static getKd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kd",
  })
  @post("{id}")
  static createKd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
