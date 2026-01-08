import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrj")
export default class HrjController {
  @operation({
    summary: "Get Hrj",
  })
  @get()
  static getHrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrj",
  })
  @post("{id}")
  static createHrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
