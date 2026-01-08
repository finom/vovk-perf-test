import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrw")
export default class HrwController {
  @operation({
    summary: "Get Hrw",
  })
  @get()
  static getHrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrw",
  })
  @post("{id}")
  static createHrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
