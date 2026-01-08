import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elb")
export default class ElbController {
  @operation({
    summary: "Get Elb",
  })
  @get()
  static getElb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elb",
  })
  @post("{id}")
  static createElb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
