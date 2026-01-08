import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irk")
export default class IrkController {
  @operation({
    summary: "Get Irk",
  })
  @get()
  static getIrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irk",
  })
  @post("{id}")
  static createIrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
