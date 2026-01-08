import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqk")
export default class AqkController {
  @operation({
    summary: "Get Aqk",
  })
  @get()
  static getAqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqk",
  })
  @post("{id}")
  static createAqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
