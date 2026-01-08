import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iee")
export default class IeeController {
  @operation({
    summary: "Get Iee",
  })
  @get()
  static getIee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iee",
  })
  @post("{id}")
  static createIee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
