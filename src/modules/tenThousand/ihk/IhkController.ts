import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihk")
export default class IhkController {
  @operation({
    summary: "Get Ihk",
  })
  @get()
  static getIhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihk",
  })
  @post("{id}")
  static createIhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
