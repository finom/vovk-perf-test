import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inx")
export default class InxController {
  @operation({
    summary: "Get Inx",
  })
  @get()
  static getInx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inx",
  })
  @post("{id}")
  static createInx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
