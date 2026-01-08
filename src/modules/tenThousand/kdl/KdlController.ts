import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdl")
export default class KdlController {
  @operation({
    summary: "Get Kdl",
  })
  @get()
  static getKdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdl",
  })
  @post("{id}")
  static createKdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
