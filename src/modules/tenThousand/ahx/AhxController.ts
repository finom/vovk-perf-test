import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahx")
export default class AhxController {
  @operation({
    summary: "Get Ahx",
  })
  @get()
  static getAhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahx",
  })
  @post("{id}")
  static createAhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
