import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktk")
export default class KtkController {
  @operation({
    summary: "Get Ktk",
  })
  @get()
  static getKtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktk",
  })
  @post("{id}")
  static createKtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
