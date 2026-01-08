import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmu")
export default class NmuController {
  @operation({
    summary: "Get Nmu",
  })
  @get()
  static getNmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmu",
  })
  @post("{id}")
  static createNmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
