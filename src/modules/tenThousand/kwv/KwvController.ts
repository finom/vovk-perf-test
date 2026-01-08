import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwv")
export default class KwvController {
  @operation({
    summary: "Get Kwv",
  })
  @get()
  static getKwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwv",
  })
  @post("{id}")
  static createKwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
