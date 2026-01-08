import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hib")
export default class HibController {
  @operation({
    summary: "Get Hib",
  })
  @get()
  static getHib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hib",
  })
  @post("{id}")
  static createHib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
