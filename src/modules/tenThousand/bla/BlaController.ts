import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bla")
export default class BlaController {
  @operation({
    summary: "Get Bla",
  })
  @get()
  static getBla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bla",
  })
  @post("{id}")
  static createBla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
