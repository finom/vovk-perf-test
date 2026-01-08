import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jct")
export default class JctController {
  @operation({
    summary: "Get Jct",
  })
  @get()
  static getJct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jct",
  })
  @post("{id}")
  static createJct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
