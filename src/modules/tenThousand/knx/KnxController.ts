import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knx")
export default class KnxController {
  @operation({
    summary: "Get Knx",
  })
  @get()
  static getKnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knx",
  })
  @post("{id}")
  static createKnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
