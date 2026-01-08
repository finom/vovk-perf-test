import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijl")
export default class IjlController {
  @operation({
    summary: "Get Ijl",
  })
  @get()
  static getIjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijl",
  })
  @post("{id}")
  static createIjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
