import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqk")
export default class IqkController {
  @operation({
    summary: "Get Iqk",
  })
  @get()
  static getIqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqk",
  })
  @post("{id}")
  static createIqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
