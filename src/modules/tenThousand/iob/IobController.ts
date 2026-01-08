import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iob")
export default class IobController {
  @operation({
    summary: "Get Iob",
  })
  @get()
  static getIob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iob",
  })
  @post("{id}")
  static createIob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
