import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igu")
export default class IguController {
  @operation({
    summary: "Get Igu",
  })
  @get()
  static getIgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igu",
  })
  @post("{id}")
  static createIgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
