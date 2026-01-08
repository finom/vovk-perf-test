import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kp")
export default class KpController {
  @operation({
    summary: "Get Kp",
  })
  @get()
  static getKp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kp",
  })
  @post("{id}")
  static createKp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
