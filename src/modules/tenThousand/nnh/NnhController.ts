import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnh")
export default class NnhController {
  @operation({
    summary: "Get Nnh",
  })
  @get()
  static getNnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnh",
  })
  @post("{id}")
  static createNnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
