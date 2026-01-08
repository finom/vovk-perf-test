import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nck")
export default class NckController {
  @operation({
    summary: "Get Nck",
  })
  @get()
  static getNck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nck",
  })
  @post("{id}")
  static createNck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
