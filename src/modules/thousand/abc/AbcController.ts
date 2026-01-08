import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abc")
export default class AbcController {
  @operation({
    summary: "Get Abc",
  })
  @get()
  static getAbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abc",
  })
  @post("{id}")
  static createAbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
