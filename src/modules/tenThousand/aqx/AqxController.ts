import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqx")
export default class AqxController {
  @operation({
    summary: "Get Aqx",
  })
  @get()
  static getAqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqx",
  })
  @post("{id}")
  static createAqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
