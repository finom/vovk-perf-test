import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iby")
export default class IbyController {
  @operation({
    summary: "Get Iby",
  })
  @get()
  static getIby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iby",
  })
  @post("{id}")
  static createIby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
