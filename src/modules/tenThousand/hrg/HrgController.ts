import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrg")
export default class HrgController {
  @operation({
    summary: "Get Hrg",
  })
  @get()
  static getHrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrg",
  })
  @post("{id}")
  static createHrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
