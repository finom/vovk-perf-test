import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrk")
export default class HrkController {
  @operation({
    summary: "Get Hrk",
  })
  @get()
  static getHrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrk",
  })
  @post("{id}")
  static createHrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
