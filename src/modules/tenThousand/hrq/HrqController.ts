import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrq")
export default class HrqController {
  @operation({
    summary: "Get Hrq",
  })
  @get()
  static getHrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrq",
  })
  @post("{id}")
  static createHrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
