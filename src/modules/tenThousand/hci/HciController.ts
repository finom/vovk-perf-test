import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hci")
export default class HciController {
  @operation({
    summary: "Get Hci",
  })
  @get()
  static getHci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hci",
  })
  @post("{id}")
  static createHci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
